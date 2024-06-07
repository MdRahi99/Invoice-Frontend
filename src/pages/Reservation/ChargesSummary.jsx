/* eslint-disable react/prop-types */
const ChargesSummary = ({ selectedCar, selectedAdditionalCharges, setTotalCharge }) => {
    const calculateTotal = () => {
        let total = selectedCar ? selectedCar.rates.daily + selectedCar.rates.weekly : 0;

        selectedAdditionalCharges.forEach((charge) => {
            if (typeof charge.price === 'number') {
                total += charge.price;
            } else if (typeof charge.price === 'string') {
                const percentageValue = parseFloat(charge.price) / 100;
                total += total * percentageValue;
            }
        });

        return total.toFixed(2);
    };

    const total = calculateTotal();
    setTotalCharge(total)

    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-semibold mb-9 pb-1 border-b border-[#5D5CFF]">Charges Summary</h2>
            <div className="w-full p-6 text-left border border-[#5D5CFF] rounded-md bg-[#DFDFFF]">
                <table className="w-full">
                    <thead>
                        <tr className="border-b text-[14px] font-semibold text-[#1b1b1b] border-[#5D5CFF]">
                            <th className="py-5 text-left">Charge</th>
                            <th className="py-5 text-center">Unit</th>
                            <th className="py-5 text-center">Rate</th>
                            <th className="py-5 text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedCar ? 
                            <>
                                <tr>
                                    <td className="py-5">Daily</td>
                                    <td className="py-5 text-center">1</td>
                                    <td className="py-5 text-center">${selectedCar.rates.daily.toFixed(2)}</td>
                                    <td className="py-5 text-center">${selectedCar.rates.daily.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className="py-5">Weekly</td>
                                    <td className="py-5 text-center">1</td>
                                    <td className="py-5 text-center">${selectedCar.rates.weekly.toFixed(2)}</td>
                                    <td className="py-5 text-center">${selectedCar.rates.weekly.toFixed(2)}</td>
                                </tr>
                            </>
                            :
                            <>
                                <tr>
                                    <td className="py-5">Daily</td>
                                    <td className="py-5 text-center">1</td>
                                    <td className="py-5 text-center">0</td>
                                    <td className="py-5 text-center">0</td>
                                </tr>
                                <tr>
                                    <td className="py-5">Weekly</td>
                                    <td className="py-5 text-center">1</td>
                                    <td className="py-5 text-center">0</td>
                                    <td className="py-5 text-center">0</td>
                                </tr>
                            </>
                        }
                        {selectedAdditionalCharges.map((charge) => (
                            <tr key={charge.id}>
                                <td className="py-5">{charge.name}</td>
                                <td className="py-5 text-center">1</td>
                                <td className="py-5 text-center">${typeof charge.price === 'number' ? charge.price.toFixed(2) : charge.price}</td>
                                <td className="py-5 text-center">${typeof charge.price === 'number' ? charge.price.toFixed(2) : charge.price}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="pt-7 font-bold" colSpan="3">Total</td>
                            <td className="pt-7 font-bold">${total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChargesSummary;