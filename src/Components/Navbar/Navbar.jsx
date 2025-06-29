import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { Tooltip } from 'react-tooltip'
import { FaMoon, FaSun } from 'react-icons/fa';


const Navbar = ({ theme, toggleTheme }) => {

    const { user, signout, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signout().then(() => {

            setUser(null);
            navigate('/login');
            toast.success('Log Out Succesfully')

        }).catch(error => {
            toast.error(error);


        })
    }


    const Links = <>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold   md:text-white ${isActive ? 'bg-blue-600 px-2 py-1 text-white rounded-xl' : ' '}`} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold  md:text-white ${isActive ? 'bg-blue-600 px-2 py-1 text-white rounded-xl' : ' '}`} to='/allrecipe'>All Recipes</NavLink>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold  md:text-white ${isActive ? 'bg-blue-600 px-2 py-1 text-white rounded-xl' : ' '}`} to='/addrecipe'>Add Recipe</NavLink>

        {
            user &&
            <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold md:text-white  ${isActive ? 'bg-blue-600 px-2 py-1 text-white rounded-xl' : ''}`} to="/myrecipe">My Recipe</NavLink>
        }

        {
            !user &&
            <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 md:text-white font-bold text-xl ${isActive ? 'bg-blue-600 px-2 py-1 text-white rounded-xl' : ''}`} to="/registration">Registration</NavLink>
        }




    </>
    return (
        <div className={`navbar shadow-sm py-4 fixed top-0 left-0 w-full z-10 ${theme === 'light' ? 'bg-gray-900' : 'bg-gray-500 text-white'}`}>
            <Tooltip id="my-tooltip" />
            <ToastContainer
                position="top-center"
                reverseOrder={false}
            />
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="blue"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        {
                            Links
                        }

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl md:text-2xl text-blue-500">Recipe Book App</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        Links
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <button className='mr-4'
                    onClick={toggleTheme}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        color: theme === 'light' ? '#000' : '#fff',
                    }}
                >
                    {theme === 'light' ? <FaMoon color='white' /> : < FaSun color='white' />}
                </button>

                <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    data-tooltip-place="top"
                >
                    <div className="avatar">
                        <div className="mask mask-hexagon-2 w-8">
                            {
                                user ? <img src={user ? user?.photoURL : 'https://img.daisyui.com/images/profile/demo/distracted2@192.webp'} alt='sd' /> : ' '

                            }


                        </div>
                    </div>

                </a>



                <div className='ml-2'>
                    {
                        user ? <button onClick={handleSignOut} className='btn bg-primary text-white'>Log Out</button> : <Link to={'/login'}><button className='btn bg-primary text-white'>Log In</button></Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;