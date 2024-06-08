import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import generateUniqueId from '../../components/GenerateUniqueId/GenerateUniqueId';

const ReservationForm = () => {
    const { register, setValue, formState: { errors }, control } = useFormContext();

    // Watch pickupDate and returnDate fields
    const pickupDate = useWatch({ control, name: 'pickupDate' });
    const returnDate = useWatch({ control, name: 'returnDate' });

    useEffect(() => {
        const uniqueId = generateUniqueId();
        setValue('id', uniqueId);
    }, [setValue]);

    useEffect(() => {
        if (pickupDate && returnDate) {
            const pickup = new Date(pickupDate);
            const returnD = new Date(returnDate);

            if (pickup <= returnD) {
                const duration = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));
                setValue('duration', duration);
            } else {
                setValue('duration', 0);
            }
        }
    }, [pickupDate, returnDate, setValue]);

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-6 pb-1 border-b border-[#5D5CFF]">Reservation Details</h2>
            <div className='flex flex-col gap-6 rounded border border-[#D7D7FF] p-4'>
                <div className="">
                    <label className="block mb-2">Reservation ID</label>
                    <input
                        type="text"
                        {...register('id')}
                        className="w-full p-[6px] border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded bg-gray-100 cursor-not-allowed"
                        disabled
                    />
                </div>
                {['pickupDate', 'returnDate'].map((field, index) => (
                    <div key={index} className="">
                        <label className="block mb-2">{field.charAt(0).toUpperCase() + field.slice(1).replace('Date', ' Date')} <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                        <input
                            type="datetime-local"
                            {...register(field, { required: `${field.charAt(0).toUpperCase() + field.slice(1).replace('Date', ' Date')} is required` })}
                            className={`w-full p-[6px] border ${errors[field] ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors[field] ? 'red-500' : '[#babaf9]'} rounded`}
                        />
                        {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field].message}</p>}
                    </div>
                ))}
                <div className="flex items-center gap-6">
                    <div className="w-full flex items-center gap-4 lg:gap-20">
                        <label className="mb-2">Duration</label>
                        <input
                            type="number"
                            {...register('duration')}
                            placeholder='Days'
                            className="w-full p-[6px] text-center border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded"
                            readOnly
                        />
                    </div>
                </div>
                <div className="">
                    <label className="block mb-2">Discount</label>
                    <input
                        type="number"
                        {...register('discount')}
                        className="w-full p-[6px] border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReservationForm;
