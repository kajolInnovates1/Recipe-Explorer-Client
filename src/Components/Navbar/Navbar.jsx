import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
// import ReactTooltip from 'react-tooltip';


const Navbar = () => {
    const { user, signout, setUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signout().then(() => {
            setUser(null);
        }).catch(error => {
            // console.log(error);
        })
    }
    console.log(user?.photoURL);


    const Links = <>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold text-xl  md:text-white ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ' '}`} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold text-xl  md:text-white ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ' '}`} to='/allrecipe'>All Recipes</NavLink>
        <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold text-xl md:text-white ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ' '}`} to='/addrecipe'>Add Recipe</NavLink>

        {
            user &&
            <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 font-bold md:text-white text-xl ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ''}`} to="/myrecipe">My Recipe</NavLink>
        }

        {
            !user &&
            <NavLink className={({ isActive }) => `ml-2 md:ml-12 mb-4 md:mb-2 md:text-white font-bold text-xl ${isActive ? 'bg-blue-600 px-3 py-2 text-white rounded-xl' : ''}`} to="/registration">Registration</NavLink>
        }




    </>
    return (
        <div className="navbar bg-gray-900 shadow-sm py-4">
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
                <div className="avatar">
                    <div className="mask mask-hexagon-2 w-8">
                        <img src={user ? user?.photoURL : 'https://img.daisyui.com/images/profile/demo/distracted2@192.webp'} alt="User Profile" />
                        {/* <ReactTooltip place="top" type="dark" effect="solid" />
                        data-tip="Hello, I am a tooltip!" */}

                    </div>
                </div>
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