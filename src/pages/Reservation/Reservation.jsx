import { useForm, FormProvider } from 'react-hook-form';
import useCars from '../../hooks/useCars';
import CustomerForm from '../../components/Forms/CustomerForm';
import ReservationForm from '../../components/Forms/ReservationForm';
import VehicleForm from '../../components/Forms/VehicleForm';
import ChargesSummary from './ChargesSummary';
import AdditionalCharges from './AdditionalCharges';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import useCreateReservation from '../../hooks/useCreateReservation';

const additionalCharges = [
    {
        id: 1,
        name: 'Collision Damage Waiver',
        price: 9.00
    },
    {
        id: 2,
        name: 'Liability Insurance',
        price: 15.00
    },
    {
        id: 3,
        name: 'Rental Tax',
        price: 11.50
    }
];

const Reservation = () => {
    const { cars, loading, error } = useCars();
    const methods = useForm();
    const [totalCharge, setTotalCharge] = useState(0);
    const [selectedCar, setSelectedCar] = useState(null);
    const [selectedAdditionalCharges, setSelectedAdditionalCharges] = useState([]);
    const {createReservation} = useCreateReservation();

    const onSubmit = async (formData) => {
        const formDataWithTotal = {
            ...formData,
            totalCharge: Number(totalCharge)
        };

        try {
            await createReservation(formDataWithTotal);
            toast.success('Reservation created successfully!');
        } catch (error) {
            toast.error('Failed to create reservation. Please try again.');
            console.error('Error:', error);
        }
    };

    if (loading) return <h1>Loading...</h1>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <Toaster />
            <div className='relative pb-6'>
                <h1 className="text-2xl font-bold mb-4">Reservation</h1>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
                        <ReservationForm />
                        <CustomerForm />
                        <ChargesSummary
                            setTotalCharge={setTotalCharge}
                            selectedCar={selectedCar}
                            selectedAdditionalCharges={selectedAdditionalCharges}
                        />
                        <VehicleForm cars={cars} onSelectCar={setSelectedCar} />
                        <AdditionalCharges
                            additionalCharges={additionalCharges}
                            onAdditionalChargeChange={(selectedCharges) => setSelectedAdditionalCharges(selectedCharges)}
                        />
                    </div>

                    <button type="submit" className="text-[14px] absolute top-6 right-10 bg-[#5D5CFF] text-white py-[5px] font-medium hover:bg-[#4b4bf4] px-4 rounded">
                        Print / Download
                    </button>
                </form>
            </FormProvider>
        </div>
    );
};

export default Reservation;
