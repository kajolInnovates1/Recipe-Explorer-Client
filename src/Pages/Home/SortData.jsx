import React, { useEffect, useState } from 'react';
import SingleSort from './SingleSort';

const SortData = () => {
    const [remain, setRemain] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-bagm7fo5c-kajol201s-projects.vercel.app/sort')
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setRemain(data);
            })
            .catch((error) => {
                console.error('Error fetching sorted data:', error);
                setRemain([]);
            });
    }, []);
    return (
        <div className='my-24'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-5xl text-blue-500 mb-8'>Most Top Recipe</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    Array.isArray(remain) && remain.map(recipe => <SingleSort key={recipe._id} recipe={recipe}></SingleSort>)
                }
            </div>
        </div>
    );
};

export default SortData;