import React from 'react';
import Banner from './Banner';
import Testimonials from './Testmonial';
import Categories from './Category';
import SortData from './SortData';
import { useNavigate } from 'react-router';
const Home = () => {
    const navigate = useNavigate();
    const handlesub = () => {
        navigate('/allrecipe');

    }
    // const data = useLoaderData();
    return (
        <div>

            {/* banner section */}
            <div>
                <Banner></Banner>

            </div>

            {/* extra Section */}

            {/* Sorting section */}
            <div>
                <SortData ></SortData>
            </div>

            <div className='text-center mb-12'>
                <button onClick={handlesub} className="btn btn-primary">View All Recipes</button>
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