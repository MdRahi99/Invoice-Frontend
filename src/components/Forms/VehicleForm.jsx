/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';

const VehicleForm = ({ cars }) => {
    const { register } = useFormContext();

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-4 pb-1 border-b border-[#5D5CFF]">Vehicle Information</h2>

            <div className='flex flex-col gap-6 rounded border border-[#D7D7FF] p-4'>
                <div className="">
                    <label className="block mb-2">Vehicle Type</label>
                    <select {...register('vehicleType')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded">
                        {cars.map(car => (
                            <option key={car.id} value={car.type}>{car.type}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label className="block mb-2">Vehicle</label>
                    <select {...register('vehicle')} className="w-full p-2 border border-[#D7D7FF] focus:outline-none focus:border-[#babaf9] rounded">
                        {cars.map(car => (
                            <option key={car.id} value={car.id}>{car.model}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default VehicleForm;
