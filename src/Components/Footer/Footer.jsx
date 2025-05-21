import React, { useContext } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/AuthContext';
import { NavLink } from 'react-router';


const Footer = () => {
    const { user } = useContext(AuthContext);
    const Links = <>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold text-xl ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ' '}`} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold text-xl ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ' '}`} to='/allrecipe'>All Recipes</NavLink>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold text-xl ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ' '}`} to='/addrecipe'>Add Recipe</NavLink>

        {
            user &&
            <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold text-xl ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ''}`} to="/myrecipe">My Recipe</NavLink>
        }

        {
            !user &&
            <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold text-xl ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ''}`} to="/registration">Registration</NavLink>
        }




    </>;
    return (
        <footer className="bg-gray-900 text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

                {/* Website Name */}
                <div className="mb-4 md:mb-0 text-lg font-bold text-blue-500">
                    Recipe Book App
                </div>

                {/* Copyright */}
                <div className="mb-4 md:mb-0 text-sm">
                    &copy; {new Date().getFullYear()} MyRecipeSite. All rights reserved.
                </div>

                {/* Contact Info */}
                <div className="mb-4 md:mb-0 text-sm">
                    Contact: <a href="mailto:contact@myrecipesite.com" className="underline hover:text-gray-300">contact@myrecipesite.com</a>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 text-xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600">
                        <i className="fab fa-facebook-f"><FaFacebookF></FaFacebookF></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
                        <i className="fab fa-twitter"><FaTwitter></FaTwitter></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600">
                        <i className="fab fa-instagram"><FaInstagram></FaInstagram></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
                        <i className="fab fa-linkedin-in"><FaLinkedinIn></FaLinkedinIn></i>
                    </a>
                </div>


            </div>
            <div className=' flex flex-col gap-5 md:w-1/5 mx-auto pt-12'>
                {
                    Links

                }
            </div>

        </footer>
    );
};

export default Footer;
