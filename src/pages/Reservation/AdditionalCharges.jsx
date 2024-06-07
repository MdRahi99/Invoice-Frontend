import { useFormContext } from "react-hook-form";

/* eslint-disable react/prop-types */
const AdditionalCharges = ({ additionalCharges, onAdditionalChargeChange }) => {
    const { register } = useFormContext();

    const handleAdditionalChargeChange = (event) => {
        const { value, checked } = event.target;
        const chargeId = parseInt(value, 10);
        const selectedCharge = additionalCharges.find((charge) => charge.id === chargeId);

        onAdditionalChargeChange((prevSelectedCharges) => {
            if (checked) {
                return [...prevSelectedCharges, selectedCharge];
            } else {
                return prevSelectedCharges.filter((charge) => charge.id !== chargeId);
            }
        });
    };

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-6 pb-1 border-b border-[#5D5CFF]">Additional Charges</h2>
            <div className="w-full text-left border border-[#D7D7FF] flex flex-col gap-7 rounded-md p-4">
                {additionalCharges.map((charge) => (
                    <div className="flex items-center" key={charge.id}>
                        <input
                            type="checkbox"
                            id={`${charge.id}`}
                            className="mr-2"
                            value={charge.id}
                            {...register(`additionalCharges`)}
                            onChange={handleAdditionalChargeChange}
                        />
                        <label htmlFor={`${charge.id}`} className="flex-grow font-medium">{charge.name}</label>
                        <span className="font-medium">${charge.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdditionalCharges;