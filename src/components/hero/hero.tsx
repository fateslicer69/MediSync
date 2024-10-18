// hero.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AdminHero: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Each box is wrapped in a Link component for navigation */}
                <Link to="/add-doctor" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition">
                    <h2 className="text-xl font-semibold mb-2">Add Doctor</h2>
                    <p>Add new doctors to the hospital's staff and manage their details.</p>
                </Link>

                <Link to="/adding-patient" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition">
                    <h2 className="text-xl font-semibold mb-2">Add Patient</h2>
                    <p>Register new patients and update their medical records.</p>
                </Link>

                <Link to="/manage-appointment" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition">
                    <h2 className="text-xl font-semibold mb-2">Manage Appointments</h2>
                    <p>View and manage upcoming appointments for doctors and patients.</p>
                </Link>

                <Link to="/billing" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition">
                    <h2 className="text-xl font-semibold mb-2">Billing & Payments</h2>
                    <p>Track payments, generate bills, and manage financial records.</p>
                </Link>

                <Link to="/reports" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition">
                    <h2 className="text-xl font-semibold mb-2">Reports & Analytics</h2>
                    <p>View hospital statistics, patient reports, and other analytics.</p>
                </Link>

                <Link to="/staff-management" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition">
                    <h2 className="text-xl font-semibold mb-2">Staff Management</h2>
                    <p>Manage hospital staff roles, schedules, and contact information.</p>
                </Link>
            </div>
        </div>
    );
};

export default AdminHero;
