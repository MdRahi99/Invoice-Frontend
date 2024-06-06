const ChargesSummary = () => {
    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-4 pb-1 border-b border-[#5D5CFF]">Charges Summary</h2>
            <div className="w-full p-6 text-left border border-[#5D5CFF] rounded-md bg-[#DFDFFF]">
                <thead>
                    <tr className="border-b text-[14px] font-semibold text-[#1b1b1b] border-[#5D5CFF]">
                        <th className="py-2">Charge</th>
                        <th className="py-2">Unit</th>
                        <th className="py-2">Rate</th>
                        <th className="py-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-[#D7D7FF]">
                        <td className="py-2">Daily</td>
                        <td className="py-2">-</td>
                        <td className="py-2">$99.00</td>
                        <td className="py-2">$99.00</td>
                    </tr>
                    <tr className="border-b border-[#D7D7FF]">
                        <td className="py-2">Weekly</td>
                        <td className="py-2">-</td>
                        <td className="py-2">$190.00</td>
                        <td className="py-2">$190.00</td>
                    </tr>
                    <tr className="border-b border-[#D7D7FF]">
                        <td className="py-2">Collision Damage Waiver</td>
                        <td className="py-2">$0</td>
                        <td className="py-2">$5.00</td>
                        <td className="py-2">$5.00</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold" colSpan="3">Total</td>
                        <td className="py-2 font-semibold">$294.00</td>
                    </tr>
                </tbody>
            </div>
        </div>
    );
};

export default ChargesSummary;
