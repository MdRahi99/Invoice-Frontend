import { useFormContext } from 'react-hook-form';

const CustomerForm = () => {
    const { register } = useFormContext();

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-4 pb-1 border-b border-[#5D5CFF]">Customer Information</h2>
            <div className='flex flex-col gap-6 rounded border border-[#D7D7FF] p-4'>
                <div className="">
                    <label className="block mb-2">First Name</label>
                    <input type="text" {...register('firstName')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
                <div className="">
                    <label className="block mb-2">Last Name</label>
                    <input type="text" {...register('lastName')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
                <div className="">
                    <label className="block mb-2">Email</label>
                    <input type="email" {...register('email')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
                <div className="">
                    <label className="block mb-2">Phone</label>
                    <input type="text" {...register('phone')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded" />
                </div>
            </div>
        </div>
    );
};

export default CustomerForm;
