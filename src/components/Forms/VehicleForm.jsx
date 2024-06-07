/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const VehicleForm = ({ cars, onSelectCar }) => {
    const { register, formState: { errors } } = useFormContext();
    const [selectedType, setSelectedType] = useState('');

    const handleTypeSelection = (e) => {
        setSelectedType(e.target.value);
    };

    const handleCarSelection = (carId) => {
        const selectedCar = cars.find(car => car.id === carId);
        onSelectCar(selectedCar);
    };

    const filteredCars = selectedType ? cars.filter(car => car.type === selectedType) : cars;

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-6 pb-1 border-b border-[#5D5CFF]">Vehicle Information</h2>

            <div className='flex flex-col gap-6 rounded border border-[#D7D7FF] p-4'>
                <div className="">
                    <label className="block mb-2">Vehicle Type <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                    <div className="relative">
                        <select 
                            {...register('vehicleType', { required: 'Vehicle Type is required' })} 
                            className={`w-full p-[6px] border ${errors.vehicleType ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors.vehicleType ? 'red-500' : '[#babaf9]'} rounded-md appearance-none`}
                            onChange={handleTypeSelection}
                        >
                            <option value="">Select</option>
                            {[...new Set(cars.map(car => car.type))].map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                        {errors.vehicleType && <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="">
                    <label className="block mb-2">Vehicle <span className='text-[15px] font-extrabold text-[#FF1212]'>*</span></label>
                    <div className="relative">
                        <select 
                            {...register('vehicle', { required: 'Vehicle is required' })} 
                            className={`w-full p-[6px] border ${errors.vehicle ? 'border-red-500' : 'border-[#D7D7FF]'} focus:outline-none focus:border-${errors.vehicle ? 'red-500' : '[#babaf9]'} rounded-md appearance-none`}
                            onChange={(e) => handleCarSelection(e.target.value)}
                        >
                            <option value="">Select</option>
                            {filteredCars.map((car, index) => (
                                <option key={index} value={car.id}>{car.make} {car.model}</option>
                            ))}
                        </select>
                        {errors.vehicle && <p className="text-red-500 text-sm mt-1">{errors.vehicle.message}</p>}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleForm;
