import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleRecipe from './SingleRecipe';

const AllRecipe = () => {
    const initialReceipe = useLoaderData();
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const cuisines = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];
    const [recipes, setRecipe] = useState(initialReceipe);

    useEffect(() => {
        setRecipe(initialReceipe);
    }, [initialReceipe]);

    useEffect(() => {
        if (selectedCuisine === "") {
            setRecipe(initialReceipe);
        } else {
            const filtered = initialReceipe.filter(
                recipe => recipe.cuisine.toLowerCase() === selectedCuisine?.toLowerCase()
            );
            setRecipe(filtered);
        }
    }, [selectedCuisine, initialReceipe]);

    return (
        <div className='min-h-screen'>
            <form className='mb-8'>
                <div>
                    <label className="block font-semibold mb-1">Cuisine Type</label>
                    <select
                        name='cuisine'
                        value={selectedCuisine}
                        onChange={(e) => setSelectedCuisine(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select a cuisine</option>
                        {cuisines.map((cuisine) => (
                            <option key={cuisine} value={cuisine}>
                                {cuisine}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
            {recipes.length === 0 ? (
                <p className="text-center text-gray-500 col-span-full">No recipes found for selected cuisine.</p>
            ) : (
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'
                >
                    {recipes.map(recipe => <SingleRecipe key={recipe._id} recipe={recipe} />)}
                </div>
            )}
        </div>
    );
};

export default AllRecipe;
