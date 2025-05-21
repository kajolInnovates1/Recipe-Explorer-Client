import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SingleMyrecipe = ({ recipe, handleDeleteFromUI }) => {
    const { _id, photo, title, likeCount, ingredient, instruction, cuisine, preparationTime, categories } = recipe;
    const handleDelete = () => {
        fetch(`http://localhost:8080/myrecipe/${_id}`, {
            method: 'DELETE',

        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    toast.success('Deleted Succesfull');



                }
            });

        handleDeleteFromUI(_id);
    }


    return (
        <div>

            <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-4">
                <ToastContainer
                    position="top-center"
                    reverseOrder={false}
                />
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

                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Update
                    </button>
                    <button onClick={handleDelete}

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