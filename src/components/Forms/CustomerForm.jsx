import { useFormContext } from 'react-hook-form';

const CustomerForm = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-6 pb-1 border-b border-[#5D5CFF]">Customer Information</h2>
            <div className='flex flex-col gap-6 rounded border border-[#D7D7FF] p-4'>
                <div className="">
                    <label className="block mb-2">First Name <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                    <input 
                        type="text" 
                        {...register('firstName', { required: 'First Name is required' })} 
                        className={`w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors.firstName ? 'red-500' : '[#babaf9]'} rounded`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div className="">
                    <label className="block mb-2">Last Name <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                    <input 
                        type="text" 
                        {...register('lastName', { required: 'Last Name is required' })} 
                        className={`w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors.lastName ? 'red-500' : '[#babaf9]'} rounded`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
                <div className="">
                    <label className="block mb-2">Email <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                    <input 
                        type="email" 
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} 
                        className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors.email ? 'red-500' : '[#babaf9]'} rounded`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="">
                    <label className="block mb-2">Phone <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                    <input 
                        type="text" 
                        {...register('phone', { required: 'Phone number is required', pattern: { value: /^[0-9]+$/, message: 'Invalid phone number' } })} 
                        className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors.phone ? 'red-500' : '[#babaf9]'} rounded`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
            </div>
        </div>
    );
};

export default CustomerForm;
