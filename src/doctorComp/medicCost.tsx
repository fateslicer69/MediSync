// medicCost.tsx

import React from 'react';

const MedicCost: React.FC = () => {
    // Sample medication costs data
    const medications = [
        { illness: 'Fever', cost: 200 },
        { illness: 'Cough', cost: 150 },
        { illness: 'Flu', cost: 250 },
        { illness: 'Headache', cost: 100 },
        { illness: 'Cold', cost: 120 },
        { illness: 'Stomach Pain', cost: 180 },
        { illness: 'Back Pain', cost: 300 },
        { illness: 'Allergy', cost: 90 },
        { illness: 'Skin Rash', cost: 220 },
        { illness: 'Anxiety', cost: 350 },
        // Add more sample data as needed...
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
            <h1 className="text-3xl font-bold mb-6 text-white">Medication Costs</h1>
            <table className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Illness</th>
                        <th className="border px-4 py-2">Cost (INR)</th>
                    </tr>
                </thead>
                <tbody>
                    {medications.map((medication, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{medication.illness}</td>
                            <td className="border px-4 py-2">{medication.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicCost;
