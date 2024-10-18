// AddPatient.tsx

import React, { useState } from 'react';

const AddPatient: React.FC = () => {
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState('');
    const [patientGender, setPatientGender] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle adding the patient
        console.log({
            patientName,
            patientAge,
            patientGender,
            medicalHistory,
        });

        // Clear form after submission
        setPatientName('');
        setPatientAge('');
        setPatientGender('');
        setMedicalHistory('');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Add Patient</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Age</label>
                    <input
                        type="number"
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Gender</label>
                    <select
                        value={patientGender}
                        onChange={(e) => setPatientGender(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                        required
                    >
                        <option value="" disabled>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Medical History</label>
                    <textarea
                        value={medicalHistory}
                        onChange={(e) => setMedicalHistory(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Add Patient
                </button>
            </form>
        </div>
    );
};

export default AddPatient;
