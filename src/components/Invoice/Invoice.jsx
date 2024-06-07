import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

    return (
        <div>
            <h1>Invoice</h1>
            <div>
                <h2>Reservation Details</h2>
                <p>Reservation ID: {invoiceData._id}</p>
                <p>Customer Name: {invoiceData.firstName} {invoiceData.lastName}</p>
                <p>Email: {invoiceData.email}</p>
                <p>Phone: {invoiceData.phone}</p>
                <p>Vehicle: {invoiceData.vehicle}</p>
                <p>Pickup Date: {new Date(invoiceData.pickupDate).toLocaleString()}</p>
                <p>Return Date: {new Date(invoiceData.returnDate).toLocaleString()}</p>
                <p>Total Charge: ${invoiceData.totalCharge}</p>
                <h3>Additional Charges</h3>
                <ul>
                    {invoiceData.additionalCharges.map((charge, index) => (
                        <li key={index}>{charge.name}: ${charge.price}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Invoice;
