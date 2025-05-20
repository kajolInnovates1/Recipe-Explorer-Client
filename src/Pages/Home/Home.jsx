import React from 'react';
import imgb from '../../assets/banner-re.jpg'
const Home = () => {
    return (
        <div>

            {/* banner section */}
            <div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(  ${imgb})`
                        ,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Recipe Book App</h1>
                            <p className="mb-5">
                                The Recipe Book App is a beautifully designed and user-friendly application that helps you discover, save, and organize your favorite recipes.

                            </p>
                            <button className="btn btn-primary">View All Recipes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* extra Section */}

            <div>

            </div>

        </div>
    );
};

export default Home;