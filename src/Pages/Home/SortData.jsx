import React, { useEffect, useState } from 'react';
import SingleSort from './SingleSort';

const SortData = ({ data }) => {
    const [remain, setRemain] = useState(null);
    useEffect(() => {
        const remainingData = data.slice(0, 6);
        setRemain(remainingData);
    }, [data]);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                remain && remain.map(recipe => <SingleSort key={recipe._id} recipe={recipe}></SingleSort>)
            }
        </div>
    );
};

export default SortData;