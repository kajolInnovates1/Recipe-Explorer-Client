import React from 'react';
import Banner from './Banner';
import Testimonials from './Testmonial';
import Categories from './Category';
const Home = () => {
    return (
        <div>

            {/* banner section */}
            <div>
                <Banner></Banner>

            </div>

            {/* extra Section */}

            <div>

                <Testimonials></Testimonials>

            </div>


            <div>

                <Categories></Categories>

            </div>

        </div>
    );
};

export default Home;