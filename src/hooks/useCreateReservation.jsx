import { useState } from 'react';
import axios from 'axios';

const useCreateReservation = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const createReservation = async (reservationData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/reservations`, reservationData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { createReservation, loading, error, data };
};

export default useCreateReservation;
