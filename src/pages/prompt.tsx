// PromptPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PromptPageProps {
    setUserRole: (role: string) => void;
}

const PromptPage: React.FC<PromptPageProps> = ({ setUserRole }) => {
    const navigate = useNavigate();

    const handleRoleSelection = (role: string) => {
        setUserRole(role);
        // Redirect to the appropriate dashboard based on the role
        if (role === 'admin') {
            navigate('/admin/dashboard');
        } else if (role === 'doctor') {
            navigate('/doctor/dashboard');
        }
        navigate('/add-doctor'); // Navigate to /add-doctor after selecting the role
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Welcome to Hospital Management</h1>
            <p className="mb-4">Please select your role:</p>
            <button
                onClick={() => handleRoleSelection('admin')}
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
            >
                Admin
            </button>
            <button
                onClick={() => handleRoleSelection('doctor')}
                className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
                Doctor
            </button>
        </div>
    );
};

export default PromptPage;
