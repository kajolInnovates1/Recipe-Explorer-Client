import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const SingleRecipe = ({ recipe }) => {
    const { user } = useContext(AuthContext);


    const { _id, photo, title, likeCount, ingredient, instruction, cuisine, preparationTime, categories } = recipe;
    const handleClick = () => {
        toast.error("Can't See Details! please Login");

    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                reverseOrder={false}
            />
            <div className="bg-white rounded-xl shadow-lg p-5 transition-all hover:shadow-2xl">
                <img
                    src={photo}
                    alt={title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />

                <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>

                <div className="mb-2 text-sm text-gray-600">
                    <p><strong>Likes:</strong> ❤️ {likeCount}</p>
                    <p><strong>Cuisine:</strong> {cuisine}</p>
                    <p><strong>Preparation Time:</strong> ⏱️ {preparationTime} mins</p>
                    <p><strong>Category:</strong> {categories}</p>
                </div>

                <div className="mb-2">
                    <p className="font-semibold text-gray-700">Ingredients:</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{ingredient}</p>
                </div>

                <div className="mb-4">
                    <p className="font-semibold text-gray-700">Instructions:</p>
                    <p className="text-sm text-gray-600 line-clamp-3">{instruction}</p>
                    {
                        user && <Link to={`/details/${_id}`}>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold">
                                See Details
                            </button>
                        </Link>
                    }
                    {
                        !user &&
                        <button onClick={handleClick} className="w-full pt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold">
                            See Details
                        </button>

                    }
                </div>
            </div>
        </div>



    )
};
export default SingleRecipe;