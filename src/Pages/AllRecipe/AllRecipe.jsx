import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleRecipe from './SingleRecipe';

const AllRecipe = () => {
    const initialReceipe = useLoaderData();
    const [recipes, setRecipe] = useState(initialReceipe);
    useEffect(() => {
        setRecipe(initialReceipe)
    }, [initialReceipe]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            {
                recipes.map(recipe => <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>)
            }
        </div>
    );
};

export default AllRecipe;