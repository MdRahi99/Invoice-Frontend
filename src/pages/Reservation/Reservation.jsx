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
            <div className='flex items-center justify-between pb-6'>
                <h1 className="text-2xl font-bold mb-4">Reservation</h1>
                <button type="submit" className="text-[14px] bg-[#5D5CFF] text-white py-2 px-4 rounded">
                    Print / Download
                </button>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 gap-4">
                        <ReservationForm />
                        <CustomerForm />
                        <ChargesSummary />
                        <VehicleForm cars={cars} />
                        <AdditionalCharges />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default Reservation;
