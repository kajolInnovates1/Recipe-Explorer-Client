import React from 'react';
import imgb from '../../assets/banner-re.jpg'
import { useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';


const Banner = () => {
    const navigate = useNavigate();
    const handlesub = () => {
        navigate('/allrecipe');

    }
    return (
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
                        <h1 className="mb-5 text-5xl font-bold text-blue-600">Recipe Book App</h1>
                        <p className="mb-5 text-xl md:text-2xl lg:text-3xl">
                            The Recipe Book App is a beautifully designed and user-friendly application that helps you discover,
                            <span style={{ color: 'blue', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={[' save, and organize your favorite recipes']}
                                    loop={1000}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>

                        </p>
                        <button onClick={handlesub} className="btn btn-primary">View All Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;