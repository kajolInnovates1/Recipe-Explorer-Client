import React, { useEffect, useState } from 'react';
import SingleSort from './SingleSort';

const SortData = ({ data }) => {
    const [remain, setRemain] = useState(null);
    useEffect(() => {
        const remainingData = data.slice(0, 6);
        setRemain(remainingData);
    }, [data]);
    return (
        <div className='my-24'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-5xl text-blue-500'>Most Favourite Recipe</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    remain && remain.map(recipe => <SingleSort key={recipe._id} recipe={recipe}></SingleSort>)
                }
            </div>
        </div>
    );
};

export default SortData;