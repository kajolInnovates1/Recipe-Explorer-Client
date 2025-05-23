import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const AddRecipe = () => {
    const cuisines = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];
    const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'];
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const ingredient = form.ingredient.value;
        const instruction = form.instruction.value;
        const cuisine = form.cuisine.value;
        const preparationTime = form.preparationTime.value;
        const selectedCategories = [];
        const checkboxes = form.querySelectorAll('input[name="categories"]:checked');
        checkboxes.forEach((checkbox) => {
            selectedCategories.push(checkbox.value);
        });
        if (!user) {
            toast.error("This didn't work.");
            navigate('/login');
        }


        const formInfoo = {
            photo,
            title,
            ingredient,
            instruction,
            cuisine,
            preparationTime,
            categories: selectedCategories,
            likeCount: 0
        }
        if (user) {
            const userEmail = user?.email;
            const formInfo = { ...formInfoo, userEmail };



            // console.log(formInfo);

            fetch('https://assignment-10-server-bagm7fo5c-kajol201s-projects.vercel.app/use', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Added Data Succesfully');
                        navigate('/myrecipe');
                    }
                }
                );
        }



    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
            <ToastContainer
                position="top-center"
                reverseOrder={false}
            />
            <h2 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Image */}
                <div>
                    <label className="block font-semibold mb-1">Image URL</label>
                    <input name='photo'
                        type="text"
                        placeholder="Enter image URL"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Title */}
                <div>
                    <label className="block font-semibold mb-1">Title</label>
                    <input
                        type="text" name='title'
                        placeholder="Enter recipe title"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Ingredients */}
                <div>
                    <label className="block font-semibold mb-1">Ingredients</label>
                    <textarea
                        placeholder="List ingredients (comma-separated)" name='ingredient'
                        rows="3"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Instructions */}
                <div>
                    <label className="block font-semibold mb-1">Instructions</label>
                    <textarea
                        placeholder="Write preparation steps" name='instruction'
                        rows="4"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Cuisine Type */}
                <div>
                    <label className="block font-semibold mb-1">Cuisine Type</label>
                    <select name='cuisine' className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="">Select a cuisine</option>
                        {cuisines.map((cuisine) => (
                            <option key={cuisine} value={cuisine}>
                                {cuisine}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Preparation Time */}
                <div>
                    <label className="block font-semibold mb-1">Preparation Time (minutes)</label>
                    <input name='preparationTime'
                        type="number"
                        placeholder="e.g. 30"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Categories */}
                <div>
                    <label className="block font-semibold mb-2">Categories</label>
                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat) => (
                            <label key={cat} className="flex items-center gap-2">
                                <input type="checkbox" name='categories' value={cat} className="accent-blue-500" />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Like Count (hidden field / default) */}
                <input type="hidden" value={0} />

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipe;
