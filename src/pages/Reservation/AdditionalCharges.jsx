const AdditionalCharges = () => {
    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-6 pb-1 border-b border-[#5D5CFF]">Additional Charges</h2>
            <div className="w-full text-left border border-[#D7D7FF] flex flex-col gap-7 rounded-md p-4">
                <div className="flex items-center">
                    <input type="checkbox" id="collisionDamageWaiver" className="mr-2" />
                    <label htmlFor="collisionDamageWaiver" className="flex-grow font-medium">Collision Damage Waiver</label>
                    <span className="font-medium">$9.00</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="liabilityInsurance" className="mr-2" />
                    <label htmlFor="liabilityInsurance" className="flex-grow font-medium">Liability Insurance</label>
                    <span className="font-medium">$15.00</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="rentalTax" className="mr-2" />
                    <label htmlFor="rentalTax" className="flex-grow font-medium">Rental Tax</label>
                    <span className="font-medium">11.5%</span>
                </div>
            </div>
        </div>
    );
};

export default AdditionalCharges;
