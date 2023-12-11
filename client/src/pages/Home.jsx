import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
    <div className="text-center">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to Your App</h1>
      <p className="text-lg mb-8">
        A full-stack authentication app built with React.js, Redux Toolkit, Tailwind CSS,
        Google login/register, JSON Web Token (JWT), and Firebase.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <Link
          to="/sign-in"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple transition-transform transform hover:scale-105"
        >
          Login
        </Link>
        <Link
          to="/sign-up"
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-green transition-transform transform hover:scale-105"
        >
          Register
        </Link>
      </div>
    </div>
  </div>
  );
}
