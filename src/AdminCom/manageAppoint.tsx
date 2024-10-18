// manageAppointment.tsx

import React from 'react';

const ManageAppointment: React.FC = () => {
    // Sample appointments data (you might want to fetch this from an API)
    const appointments = [
        { id: 1, patientName: 'Chirayu', date: '2024-10-20', time: '10:00 AM' },
        { id: 2, patientName: 'Shikhar', date: '2024-10-21', time: '11:00 AM' },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
            <h1 className="text-3xl font-bold mb-6 text-white">Manage Appointments</h1>
            <table className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Patient Name</th>
                        <th className="border px-4 py-2">Date</th>
                        <th className="border px-4 py-2">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="border px-4 py-2">{appointment.patientName}</td>
                            <td className="border px-4 py-2">{appointment.date}</td>
                            <td className="border px-4 py-2">{appointment.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Add New Appointment
            </button>
        </div>
    );
};

export default ManageAppointment;
