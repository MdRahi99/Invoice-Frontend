/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import img from "../../assets/SUV-blue.png";

const Invoice = () => {
    const { id } = useParams();
    const [invoiceData, setInvoiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInvoiceData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/reservations/${id}`);
                setInvoiceData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchInvoiceData();
    }, [id]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <div>Error: {error.message}</div>;

    const workingHours = [
        "Monday 9:00 AM - 6:00 PM",
        "Tuesday 9:00 AM - 6:00 PM",
        "Wednesday 9:00 AM - 6:00 PM",
        "Thursday 9:00 AM - 6:00 PM",
        "Friday 9:00 AM - 6:00 PM",
        "Saturday 9:00 AM - 6:00 PM",
        "Sunday 9:00 AM - 6:00 PM"
    ];

    const charges = [
        { item: "Hourly", unitPrice: "$0.50", amount: "$0.50" },
        { item: "NYS State Tax", unitPrice: "11.5%", amount: "$0.06" },
        { item: "EST TOTAL TIME & MILEAGE", unitPrice: "", amount: "$0.56" },
        { item: "Discount", unitPrice: "", amount: "$-0.00" },
        { item: "Damages", unitPrice: "", amount: "$0.00" },
        { item: "Traffic tickets", unitPrice: "", amount: "$0.00" },
        { item: "TOTAL ESTIMATED CHARGES", unitPrice: "", amount: "$0.56" },
        { item: "Renter Payments", unitPrice: "", amount: "$0.56" }
    ];

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="flex lg:flex-row flex-col justify-between gap-8 mb-4">
                <div className='w-full lg:w-1/2'>
                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                        <div>
                            <img src={img} alt="Company Logo" className="h-24 w-auto mr-4" />
                            <div className="pt-4 mt-4">
                                <h2 className="text-xl font-bold">Renter Info</h2>
                                <p><strong>Name:</strong> {invoiceData.firstName} {invoiceData.lastName}</p>
                                <p><strong>Email:</strong> {invoiceData.email}</p>
                                <p><strong>Phone:</strong> {invoiceData.phone}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">CH Car Place Inc</h1>
                            <p>162 Bergen St, Brooklyn, NY 11213</p>
                            <p>Phone: 0919545469</p>
                            <div className="mt-2">
                                {workingHours.map((hours, index) => (
                                    <p key={index}>{hours}</p>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="pt-4 mt-4">
                            <h2 className="text-xl font-bold">Unit Details</h2>
                            <p><strong>Unit:</strong> {invoiceData.vehicle}</p>
                            <p><strong>Make & Model:</strong> {invoiceData.vehicleType}</p>
                        </div>
                    </div>

                    <div className="pt-4 mt-6 lg:mt-16">
                        <h2 className="text-xl font-bold">Terms and Conditions</h2>
                        <p>NOTICE: Collision Insurance (CDW) - $7 per day Limits liability of damages to one’s own vehicle up to $1000 in event of an accident, by waiving this coverage renter agrees to be hold liable for damages up to the entire value of the vehicle.</p>
                        <div className="flex justify-between my-4">
                            <button>Accept</button>
                            <button>Reject</button>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl font-bold">Reservation</h2>
                        <p><strong>RA #:</strong> {invoiceData.id}</p>
                        <p><strong>Repair Order:</strong> </p>
                        <p><strong>Claim:</strong> N/A</p>
                        <p><strong>Date/Time Out:</strong> {new Date(invoiceData.pickupDate).toLocaleString()}</p>
                        <p><strong>Date/Time In:</strong> {new Date(invoiceData.returnDate).toLocaleString()}</p>
                    </div>
                    <div className="pt-4 mt-4 p-3 bg-gray-100">
                        <h2 className="text-xl font-bold">Charge Summary</h2>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="py-1 text-left">Unit Price</th>
                                    <th className="py-1 text-left">Amount</th>
                                    <th className="py-1 text-left">Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                {charges.map((charge, index) => (
                                    <tr key={index}>
                                        <td className="py-1">{charge.item}</td>
                                        <td className="py-1">{charge.unitPrice}</td>
                                        <td className="py-1">{charge.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='pt-3'>
                        <p>Rental service may be refused to anyone when done in the best interest of the renting company or customer. Rates do not include gasoline. Reserves the right to collect deposit covering estimated rental charges.</p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <h3 className="text-lg font-bold">Renter's Signature</h3>
                                <p>______________________________</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Additional Driver 1</h3>
                                <p>______________________________</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button onClick={handlePrint} className="bg-blue-500 text-white py-2 px-4 rounded">Print</button>
            </div>
        </div>
    );
};

export default Invoice;
