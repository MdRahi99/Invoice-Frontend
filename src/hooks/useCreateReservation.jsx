import axios from 'axios';

const useCreateReservation = () => {
    const createReservation = async (formData) => {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/reservations`, formData);
        return response.data;
    };

    return { createReservation };
};

export default useCreateReservation;
