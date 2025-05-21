import React from 'react';

const SingleMyrecipe = ({ recipe }) => {
    const { _id, photo, title, likeCount, ingredient, instruction, cuisine, preparationTime, categories } = recipe;


    return (
        <div>

            <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-4">
                <img
                    src={photo}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

                <p><span className="font-semibold">Ingredients:</span> {ingredient}</p>
                <p><span className="font-semibold">Instructions:</span> {instruction}</p>
                <p><span className="font-semibold">Cuisine Type:</span> {cuisine}</p>
                <p><span className="font-semibold">Preparation Time:</span> {preparationTime} minutes</p>
                <p><span className="font-semibold">Category:</span> {categories?.join(', ')}</p>
                <p><span className="font-semibold">Like Count:</span> {likeCount}</p>

                <div className="flex justify-between mt-4">
                    <button

                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                    >
                        Update
                    </button>
                    <button

                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                    >
                        Delete
                    </button>
                </div>
            </div>



        </div>
    );
};

export default SingleMyrecipe;