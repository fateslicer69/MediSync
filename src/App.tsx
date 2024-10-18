// App.tsx

import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/login';
import SignUpPage from './pages/signUp';
import PromptPage from './pages/prompt';
import AdminHero from './components/hero/hero'; // Admin Dashboard
import DoctorHero from './components/hero/heroDoc'; // Doctor Dashboard
import AddDoctor from './AdminCom/addDoctor';
import ManageAppointment from './AdminCom/manageAppoint';
import CheckPatient from './doctorComp/checkPatient';
import Diagnose from './doctorComp/diagnose';
import MedicCost from './doctorComp/medicCost';

const App: React.FC = () => {
    const [userRole, setUserRole] = useState<string | null>(null); // State to track user role

    return (
        <Router> {/* Wrap everything in HashRouter */}
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signin" element={<SignUpPage />} />
                    <Route path="/" element={<PromptPage setUserRole={setUserRole} />} /> {/* Pass setUserRole */}
                    <Route path="/add-doctor" element={<AddDoctor />} />
                    <Route path="/add-patient" element={<AddPatient doctorId={doctorId} existingPatients={existingPatients} />} />
                    <Route path="/manage-appointment" element={<ManageAppointment />} />
                    <Route path="/check-patients" element={<CheckPatient />} />
                    <Route path="/diagnose" element={<Diagnose />} />
                    <Route path="/medic-cost" element={<MedicCost />} />
                </Routes>
                {/* Conditional rendering for Admin or Doctor dashboards */}
                {userRole === 'admin' && <AdminHero />}
                {userRole === 'doctor' && <DoctorHero />}
            </div>
        </Router>
    );
};

export default App;



