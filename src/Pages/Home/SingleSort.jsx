import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const SingleSort = ({ recipe }) => {
    const {
        _id,
        photo,
        title,
        likeCount,
        ingredient,
        instruction,
        cuisine,
        preparationTime,
        categories,
    } = recipe;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <img
                src={photo}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-2 text-blue-600">{title}</h2>

            <p className="mb-1">
                <span className="font-semibold">Ingredients:</span> {ingredient}
            </p>
            <p className="mb-1">
                <span className="font-semibold">Instructions:</span> {instruction}
            </p>
            <p className="mb-1">
                <span className="font-semibold">Cuisine Type:</span> {cuisine}
            </p>
            <p className="mb-1">
                <span className="font-semibold">Preparation Time:</span> {preparationTime} minutes
            </p>
            <p className="mb-1">
                <span className="font-semibold">Category:</span> {categories?.join(', ')}
            </p>

            <div className="flex items-center mt-4 text-blue-600 font-semibold text-lg">
                <FaThumbsUp className="mr-2" />
                <span>{likeCount}</span>
            </div>
        </div>
    );
};

export default SingleSort;
