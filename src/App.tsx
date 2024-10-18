import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import AddPatient from './AdminCom/addPatient'; // AddPatient import

const App: React.FC = () => {
    const [userRole, setUserRole] = useState<string | null>(null); // State to track user role

    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signin" element={<SignUpPage />} />
                    <Route path="/" element={<PromptPage setUserRole={setUserRole} />} /> {/* Default to PromptPage */}
                    <Route path="/add-doctor" element={<AddDoctor />} />
                    <Route path="/add-patient" element={<AddPatient />} />
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

