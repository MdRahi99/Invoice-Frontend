/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const DateTimeInput = ({ name, label, placeholder }) => {
    const { register } = useFormContext();
    const [value, setValue] = useState('');

    return (
        <div className="relative mb-4">
            <label className="block mb-2">{label}</label>
            <input
                type="datetime-local"
                {...register(name)}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded ${!value ? 'placeholder-gray-500' : ''}`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default DateTimeInput;
