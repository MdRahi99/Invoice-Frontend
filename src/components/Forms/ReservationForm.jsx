import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import generateUniqueId from '../../components/GenerateUniqueId/GenerateUniqueId';

const ReservationForm = () => {
    const { register, setValue, formState: { errors } } = useFormContext();

    useEffect(() => {
        const uniqueId = generateUniqueId();
        setValue('id', uniqueId);
    }, [setValue]);

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-6 pb-1 border-b border-[#5D5CFF]">Reservation Details</h2>
            <div className='flex flex-col gap-6 rounded border border-[#D7D7FF] p-4'>
                <div className="">
                    <label className="block mb-2">Reservation ID</label>
                    <input 
                        type="text" 
                        {...register('id')} 
                        className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded bg-gray-100 cursor-not-allowed" 
                        disabled 
                    />
                </div>
                <div className="">
                    <label className="block mb-2">Pickup Date <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                    <input 
                        type="datetime-local" 
                        {...register('pickupDate', { required: 'Pickup Date is required' })} 
                        className={`w-full p-2 border ${errors.pickupDate ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors.pickupDate ? 'red-500' : '[#babaf9]'} rounded`} 
                    />
                    {errors.pickupDate && <p className="text-red-500 text-sm mt-1">{errors.pickupDate.message}</p>}
                </div>
                <div className="">
                    <label className="block mb-2">Return Date <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                    <input 
                        type="datetime-local" 
                        {...register('returnDate', { required: 'Return Date is required' })} 
                        className={`w-full p-2 border ${errors.returnDate ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors.returnDate ? 'red-500' : '[#babaf9]'} rounded`} 
                    />
                    {errors.returnDate && <p className="text-red-500 text-sm mt-1">{errors.returnDate.message}</p>}
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-full">
                        <label className="block mb-2">Duration</label>
                        <input 
                            type="text" 
                            {...register('duration')} 
                            className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" 
                        />
                    </div>
                </div>
                <div className="">
                    <label className="block mb-2">Discount</label>
                    <input 
                        type="text" 
                        {...register('discount')} 
                        className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" 
                    />
                </div>
            </div>
        </div>
    );
};

export default ReservationForm;
