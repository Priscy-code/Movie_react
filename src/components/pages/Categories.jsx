import React from "react";
import { useNavigate } from "react-router-dom";



const Categories = () => {
    const navigate = useNavigate();

    const categories = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Comedy'},
    {id: 3, name: 'Drama'},
    {id: 4, name: 'Horror'},
    {id: 5, name: 'Sci-Fi'}
];

const handleCategory = (category) => {
    console.log(`Selected Category: ${category}`);
    navigate(`/category/${category}`)
}
    return(
        <div className="min-h-screen p-5">
            <div className="container mx-auto space-x-6 ">
                <h1 className="font-bold text-black dark:text-white text-2xl text-center">Movie Categories</h1>
                <div className="flex flex-wrap justify-center mt-5">
                    {categories.map((category) => (
                    <div key={categories.id}
                className="px-4 py-2 rounded-d bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
                onClick={() => handleCategory(category.name)}>
                    {category.name}
                </div>
            ))}
                </div>
                
            </div>
        </div>
    )
}

export default Categories