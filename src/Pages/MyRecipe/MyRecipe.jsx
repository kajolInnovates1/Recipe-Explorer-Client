import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import SingleRecipe from '../AllRecipe/SingleRecipe';
import SingleMyrecipe from './SingleMyrecipe';

const MyRecipe = () => {
    const { user } = useContext(AuthContext);
    const initialData = useLoaderData();
    const [info, setInfo] = useState([]);


    useEffect(() => {
        if (Array.isArray(initialData)) {
            const remainingdata1 = initialData.filter(data1 => data1?.userEmail === user?.email);

            setInfo(remainingdata1);

        }
    }, [initialData, user?.email]);


    const handleDeleteFromUI = (deletedId) => {
        const remaining = info.filter(recipe => recipe._id !== deletedId);
        setInfo(remaining);
    };
    const handleUpdateInUI = (updatedRecipe) => {
        setInfo(prev => prev.map(recipe =>
            recipe._id === updatedRecipe._id ? updatedRecipe : recipe
        ));
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen'>
            {
                info && info.map(recipe => <SingleMyrecipe key={recipe._id} recipe={recipe} handleDeleteFromUI={handleDeleteFromUI} handleUpdateInUI={handleUpdateInUI} ></SingleMyrecipe>)
            }
        </div>
    );
};

export default MyRecipe;