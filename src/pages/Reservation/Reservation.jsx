import { useForm, FormProvider } from 'react-hook-form';
import useCars from '../../hooks/useCars';
import CustomerForm from '../../components/Forms/CustomerForm';
import ReservationForm from '../../components/Forms/ReservationForm';
import VehicleForm from '../../components/Forms/VehicleForm';
import ChargesSummary from './ChargesSummary';
import Loader from '../../components/Shared/Loader';
import AdditionalCharges from './AdditionalCharges';

const Reservation = () => {
    const { cars, loading, error } = useCars();
    const methods = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    if (loading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div className='relative pb-6'>
                <h1 className="text-2xl font-bold mb-4">Reservation</h1>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 gap-x-6">
                        <ReservationForm />
                        <CustomerForm />
                        <ChargesSummary />
                        <VehicleForm cars={cars} />
                        <AdditionalCharges />
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
