import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Layouts = () => {
    return (
        <>
            <div className='mx-auto'>
                <header>
                    <Navbar></Navbar>
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