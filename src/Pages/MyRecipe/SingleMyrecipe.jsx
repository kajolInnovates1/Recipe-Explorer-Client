import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SingleMyrecipe = ({ recipe, handleDeleteFromUI, handleUpdateInUI }) => {
    const { _id, photo, title, likeCount, ingredient, instruction, cuisine, preparationTime, categories } = recipe;

    const [editRecipe, setEditRecipe] = useState({
        title,
        photo,
        ingredient,
        instruction,
        cuisine,
        preparationTime,
        categories: categories.join(', '),
    });

    const handleDelete = () => {
        fetch(`https://assignment-10-server-five-wine.vercel.app/myrecipe/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Deleted Successfully');
                    handleDeleteFromUI(_id);
                }
            });
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setEditRecipe(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdateSubmit = () => {
        const updatedData = {
            ...editRecipe,
            categories: editRecipe.categories.split(',').map(cat => cat.trim())
        };

        fetch(`https://assignment-10-server-five-wine.vercel.app/myrecipe/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Recipe updated!');
                    handleUpdateInUI({ ...updatedData, _id });
                    document.getElementById(`modal-${_id}`).close();
                }
            });
    };

    return (
        <div>
            <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-4">
                <ToastContainer position="top-center" reverseOrder={false} />
                <img src={photo} alt={title} className="w-full h-48 object-cover rounded-lg" />
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p><span className="font-semibold">Ingredients:</span> {ingredient}</p>
                <p><span className="font-semibold">Instructions:</span> {instruction}</p>
                <p><span className="font-semibold">Cuisine Type:</span> {cuisine}</p>
                <p><span className="font-semibold">Preparation Time:</span> {preparationTime} minutes</p>
                <p><span className="font-semibold">Category:</span> {categories?.join(', ')}</p>
                <p><span className="font-semibold">Like Count:</span> {likeCount}</p>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => document.getElementById(`modal-${_id}`).showModal()}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Update
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Modal for update */}
            <dialog id={`modal-${_id}`} className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                    <h3 className="font-bold text-xl mb-4">Update Recipe</h3>
                    <div className="space-y-3">
                        <input type="text" name="title" defaultValue={editRecipe.title} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Title" />
                        <input type="text" name="photo" defaultValue={editRecipe.photo} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Photo URL" />
                        <input type="text" name="ingredient" defaultValue={editRecipe.ingredient} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Ingredients" />
                        <input type="text" name="instruction" defaultValue={editRecipe.instruction} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Instructions" />
                        <input type="text" name="cuisine" defaultValue={editRecipe.cuisine} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Cuisine Type" />
                        <input type="number" name="preparationTime" defaultValue={editRecipe.preparationTime} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Preparation Time" />
                        <input type="text" name="categories" defaultValue={editRecipe.categories} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Categories (comma separated)" />
                    </div>
                    <div className="modal-action mt-4">
                        <form method="dialog" className="space-x-2">
                            <button className="btn" type="button" onClick={handleUpdateSubmit}>Save</button>
                            <button className="btn" type="submit">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SingleMyrecipe;
