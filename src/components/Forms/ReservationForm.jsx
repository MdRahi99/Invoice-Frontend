import { useFormContext } from 'react-hook-form';

const ReservationForm = () => {
    const { register } = useFormContext();

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-4 pb-1 border-b border-[#5D5CFF]">Reservation Details</h2>
            <div className='flex flex-col gap-6 rounded border border-[#D7D7FF] p-4'>
                <div className="">
                    <label className="block mb-2">Reservation ID</label>
                    <input type="text" {...register('id')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
                <div className="">
                    <label className="block mb-2">Pickup Date</label>
                    <input type="datetime-local" {...register('pickupDate')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
                <div className="">
                    <label className="block mb-2">Return Date</label>
                    <input type="datetime-local" {...register('returnDate')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
                <div className="flex items-center gap-6">
                    <label className="block mb-2">Duration</label>
                    <input type="text" {...register('duration')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
                <div className="">
                    <label className="block mb-2">Discount</label>
                    <input type="text" {...register('discount')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
            </div>
        </div>
    );
};

export default ReservationForm;
