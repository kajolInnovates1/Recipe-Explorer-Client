import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaThumbsUp } from 'react-icons/fa';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Details = () => {
    const recipe = useLoaderData();
    const { user } = useContext(AuthContext);
    const id = recipe._id;
    const LikeCount = recipe.likeCount;
    const [useLike, setLike] = useState(LikeCount);
    const [Like, setcheck] = useState(false);
    const handleLiked = () => {
        if (recipe?.userEmail === user?.email) {
            toast.error("You Can't like yourself");

            return;
        }

        fetch('http://localhost:8080/details', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                setLike(prev => prev + 1);
                setcheck(true);
            }
        })


    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                reverseOrder={false}
            />
            <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
                <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">{recipe.title}</h2>

                <img
                    className="w-full h-80 object-cover rounded-xl mb-6 shadow-md"
                    src={recipe.photo}
                    alt={recipe.title}
                />

                <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-800">
                    <p><span className="font-semibold">Preparation Time:</span> {recipe.preparationTime} minutes</p>
                    <p><span className="font-semibold">Cuisine:</span> {recipe.cuisine}</p>
                    <p><span className="font-semibold">Category:</span> {recipe.categories.join(', ')}</p>

                </div>


                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
                    <p className="text-gray-700">{recipe.ingredient}</p>
                </div>
                <div className='flex flex-row justify-between items-center'>

                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
                        <p className="text-gray-700">{recipe.instruction}</p>

                    </div>
                    <div className='flex flex-row items-center gap-2 mr-8'>
                        <FaThumbsUp
                            onClick={handleLiked}
                            size={70}
                            style={{ color: Like ? 'blue' : 'black', cursor: 'pointer' }}
                        />
                        <p><span className="font-semibold text-6xl">{useLike}</span> </p>

                    </div>
                </div>

            </div>
        </div >
    );
};

export default Details;