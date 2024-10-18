// Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                MediSync
                </Link>
                <div className="space-x-4">
                    <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">
                        Login
                    </Link>
                    <Link to="/signin" className="text-white hover:text-gray-200 transition duration-300">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

