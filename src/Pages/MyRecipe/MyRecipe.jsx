import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import SingleRecipe from '../AllRecipe/SingleRecipe';
import SingleMyrecipe from './SingleMyrecipe';

const MyRecipe = () => {
    const { user } = useContext(AuthContext);
    const initialData = useLoaderData();
    const [info, setInfo] = useState(null);
    // console.log(initialData);
    useEffect(() => {
        if (Array.isArray(initialData)) {
            const remainingdata = initialData.filter(data => data.userEmail === user.email);
            setInfo(remainingdata);

        }
    }, [initialData]);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                info && info.map(recipe => <SingleMyrecipe key={recipe._id} recipe={recipe}></SingleMyrecipe>)


            }
        </div>
    );
};

export default MyRecipe;