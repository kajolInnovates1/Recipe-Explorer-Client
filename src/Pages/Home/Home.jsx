import React from 'react';
import Banner from './Banner';
import Testimonials from './Testmonial';
import Categories from './Category';
import SortData from './SortData';
import { useLoaderData } from 'react-router';
const Home = () => {
    const data = useLoaderData();
    return (
        <div>

            {/* banner section */}
            <div>
                <Banner></Banner>

            </div>

            {/* extra Section */}

            {/* Sorting section */}
            <div>
                <SortData data={data}></SortData>
            </div>


            <div>

                <Testimonials></Testimonials>

            </div>


            <div className=''>

                <Categories></Categories>

            </div>

        </div>
    );
};

export default Home;