/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';

const useCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_VEHICLE_API_BASE_URL}/carsList`);
                setCars(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    return { cars, loading, error };
};

export default useCars;
