import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Layouts = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
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