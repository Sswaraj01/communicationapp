import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [message, setMessage] = useState('Logged out successfully!');
    const navigate = useNavigate();

    useEffect(() => {
        // Navigate to welcome page after 2 seconds
        const timer = setTimeout(() => {
            navigate('/home');
        }, 1000); // Adjust time as needed for UX

        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1>{message}</h1>
            <p>You will be redirected shortly...</p>
        </div>
    );
};

export default Logout;
