// heroDoc.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const DoctorHero: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-green-700">Doctor Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/check-patients" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <h2 className="text-xl font-semibold mb-2">Check Patient Details</h2>
                    <p>View patient records, medical history, and current health status.</p>
                </Link>
                <Link to="/diagnose" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <h2 className="text-xl font-semibold mb-2">Diagnosis & Illness Types</h2>
                    <p>Diagnose patient conditions and log the type of illness.</p>
                </Link>
                <Link to="/medic-cost" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <h2 className="text-xl font-semibold mb-2">Calculate Treatment Cost</h2>
                    <p>Estimate and review the total cost of patient treatments.</p>
                </Link>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Prescribe Medicines</h2>
                    <p>Recommend medications and generate prescriptions for patients.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Medical Tools & Resources</h2>
                    <p>Access medical tools, equipment information, and reference materials.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Patient Follow-Ups</h2>
                    <p>Schedule follow-up appointments and monitor recovery progress.</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorHero;
