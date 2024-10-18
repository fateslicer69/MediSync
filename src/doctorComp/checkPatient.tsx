// checkPatient.tsx

import React from 'react';

const CheckPatient: React.FC = () => {
    // Sample patients data
    const patients = [
        { id: 1, name: 'Aarav Singh', age: 28, illness: 'Fever', location: 'Jaipur, Rajasthan' },
        { id: 2, name: 'Vivaan Sharma', age: 35, illness: 'Cough', location: 'Udaipur, Rajasthan' },
        { id: 3, name: 'Vihaan Reddy', age: 40, illness: 'Flu', location: 'Hyderabad, Telangana' },
        { id: 4, name: 'Aditya Patel', age: 22, illness: 'Headache', location: 'Jodhpur, Rajasthan' },
        { id: 5, name: 'Reyansh Rao', age: 30, illness: 'Cold', location: 'Ajmer, Rajasthan' },
        { id: 6, name: 'Dhruv Kumar', age: 27, illness: 'Stomach Pain', location: 'Hyderabad, Telangana' },
        { id: 7, name: 'Krishna Mehta', age: 45, illness: 'Back Pain', location: 'Bikaner, Rajasthan' },
        { id: 8, name: 'Arjun Joshi', age: 32, illness: 'Allergy', location: 'Indore, Madhya Pradesh' },
        { id: 9, name: 'Kartik Verma', age: 29, illness: 'Skin Rash', location: 'Jaisalmer, Rajasthan' },
        { id: 10, name: 'Rohan Nair', age: 26, illness: 'Anxiety', location: 'Guntur, Andhra Pradesh' },
        // Add more sample data up to 30 patients...
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
            <h1 className="text-3xl font-bold mb-6 text-white">Check Patient Details</h1>
            <table className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Age</th>
                        <th className="border px-4 py-2">Illness</th>
                        <th className="border px-4 py-2">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td className="border px-4 py-2">{patient.name}</td>
                            <td className="border px-4 py-2">{patient.age}</td>
                            <td className="border px-4 py-2">{patient.illness}</td>
                            <td className="border px-4 py-2">{patient.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CheckPatient;
