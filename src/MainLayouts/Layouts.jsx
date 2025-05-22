import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';


const Layouts = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };
    return (
        <>
            <div className='mx-auto' style={{
                backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
                color: theme === 'light' ? '#000' : '#fff',

            }}>
                <header>


                    <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>


                </header>
                <main className='px-12 my-12 space-y-24'>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>

        </>
    );
};

export default Layouts;