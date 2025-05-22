import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
                Oops! Page not found.
            </p>
            <p className="mb-8 text-center text-gray-600 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
