const ChargesSummary = () => {
    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-9 pb-1 border-b border-[#5D5CFF]">Charges Summary</h2>
            <div className="w-full p-6 text-left border border-[#5D5CFF] rounded-md bg-[#DFDFFF]">
                <table className="w-full">
                    <thead>
                        <tr className="border-b text-[14px] font-semibold text-[#1b1b1b] border-[#5D5CFF]">
                            <th className="py-5 text-left">Charge</th>
                            <th className="py-5 text-left">Unit</th>
                            <th className="py-5 text-center">Rate</th>
                            <th className="py-5 text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-5">Daily</td>
                            <td className="py-5 text-center">1</td>
                            <td className="py-5 text-center">$99.00</td>
                            <td className="py-5 text-center">$99.00</td>
                        </tr>
                        <tr>
                            <td className="py-5">Weekly</td>
                            <td className="py-5 text-center">1</td>
                            <td className="py-5 text-center">$190.00</td>
                            <td className="py-5 text-center">$190.00</td>
                        </tr>
                        <tr>
                            <td className="py-5">Collision Damage Waiver</td>
                            <td className="py-5 text-center"></td>
                            <td className="py-5 text-center">$5.00</td>
                            <td className="py-5 text-center">$5.00</td>
                        </tr>
                        <tr>
                            <td className="pt-7 font-bold" colSpan="3">Total</td>
                            <td className="pt-7 font-bold">$294.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChargesSummary;
