import React from 'react';
import { FaUtensils } from 'react-icons/fa';

const categories = [
    { name: "Breakfast", color: "bg-yellow-100", icon: <FaUtensils /> },
    { name: "Lunch", color: "bg-green-100", icon: <FaUtensils /> },
    { name: "Dinner", color: "bg-blue-100", icon: <FaUtensils /> },
    { name: "Dessert", color: "bg-pink-100", icon: <FaUtensils /> },
    { name: "Healthy", color: "bg-lime-100", icon: <FaUtensils /> },
    { name: "Vegetarian", color: "bg-purple-100", icon: <FaUtensils /> },
];

const Categories = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Browse by Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-4 text-center shadow hover:shadow-md cursor-pointer transition ${category.color}`}
                        >
                            <div className="text-3xl mb-2 text-gray-700">{category.icon}</div>
                            <h4 className="text-lg font-semibold text-gray-800">{category.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
