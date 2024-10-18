// addDoctor.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddDoctor: React.FC = () => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        specialty: '',
        contact: '',
        address: '',
    });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDoctorData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(doctorData);
        navigate('/add-patient'); // Navigate to /add-patient after adding a doctor
    };

    // Sample doctor data (unchanged)
    const sampleDoctors = [
        { name: 'Dr. Aarav Verma', specialty: 'Cardiologist', contact: '9876543210', address: 'Jaipur, Rajasthan' },
        // ... (other sample doctors)
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <h1 className="text-3xl font-bold mb-4 text-white">Add Doctor</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={doctorData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Specialty</label>
                    <input
                        type="text"
                        name="specialty"
                        value={doctorData.specialty}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={doctorData.contact}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={doctorData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-700 transition duration-300"
                >
                    Add Doctor
                </button>
            </form>
            <h2 className="mt-4 text-white">Sample Doctors</h2>
            <ul className="mt-2 space-y-2">
                {sampleDoctors.map((doctor, index) => (
                    <li key={index} className="text-white">
                        {doctor.name} - {doctor.specialty}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddDoctor;
