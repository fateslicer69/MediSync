// diagnose.tsx

import React, { useState } from 'react';

const Diagnose: React.FC = () => {
    const [diagnosis, setDiagnosis] = useState('');
    const [patientName, setPatientName] = useState('');

    const handleDiagnosisChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDiagnosis(e.target.value);
    };

    const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPatientName(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle diagnosis submission logic
        console.log(`Diagnosis for ${patientName}: ${diagnosis}`);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
            <h1 className="text-3xl font-bold mb-6 text-white">Diagnose Patient</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-4">
                <input
                    type="text"
                    placeholder="Patient Name"
                    value={patientName}
                    onChange={handlePatientChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                    placeholder="Enter Diagnosis"
                    value={diagnosis}
                    onChange={handleDiagnosisChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Submit Diagnosis
                </button>
            </form>
        </div>
    );
};

export default Diagnose;
