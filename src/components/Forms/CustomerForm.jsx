import { useFormContext } from 'react-hook-form';

const CustomerForm = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-6 pb-1 border-b border-[#5D5CFF]">Customer Information</h2>
            <div className='flex flex-col gap-6 rounded border border-[#D7D7FF] p-4'>
                {['firstName', 'lastName', 'email', 'phone'].map((field, index) => (
                    <div key={index} className="">
                        <label className="block mb-2">{field.charAt(0).toUpperCase() + field.slice(1)} <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                        <input
                            type={field === 'email' ? 'email' : 'text'}
                            {...register(field, {
                                required: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
                                ...(field === 'email' && {
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid email address'
                                    }
                                }),
                                ...(field === 'phone' && {
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Invalid phone number'
                                    }
                                })
                            })}
                            className={`w-full p-[6px] border ${errors[field] ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors[field] ? 'red-500' : '[#babaf9]'} rounded`}
                        />
                        {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field].message}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerForm;
