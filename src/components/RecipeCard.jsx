import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ data, chefdata }) => {

    // console.log(chefdata);
    const { chef_name, chefs_img, experience, number_of_recipes, bio ,rating } = chefdata


    const handleFavorite = ()=> {
        toast("Added To Favorite List")
    }




    const {  cooking_method, ingredients, recipe_name, recipe_img } = data
    console.log(data);
    const recipeList = recipe_name.map((item, index) =>

        <div>
            <div className="text-white card w-[350px] glass">
                <figure><img src={recipe_img[index]} alt="car!" /></figure>
                <div className="card-body h-[500px]">
                    <h2 className="card-title">{item}</h2>
                    <hr className='border-[1px] border-white' />
                    <p className='md:text-sm text-xs'>{cooking_method[index]}</p>
                    <p className='text-green-500 md:text-sm text-xs'>Ingredients: {ingredients[index].join(", ")}</p>
                    <div className="card-actions justify-start">
                        <button onClick={handleFavorite} className="btn btn-primary mb-10 ">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    )
    // console.log(chefData);
    // const chef = chefData.find(item => item.id === id)
    // const chefName = chef.chef_name
    // console.log(chefName);

    return (
        <div>
            <div className='flex flex-col justify-center items-center my-10 py-10'>
                <img src={chefs_img} alt="" className='rounded-full h-40 w-40 my-6' />
                <h1 className='md:text-3xl'>{chef_name}</h1>
                <p>Experience:{experience}</p>
                <p>Number of recipes:{number_of_recipes}</p>
                <Rating
                    placeholderRating={rating}
                    readonly

                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                    fullSymbol={<FaStar></FaStar>}
                />

                <p className='text-center my-10 border-t-2 md:text-xl text-sm h-56 w-2/3 italic'>{bio}</p>
            </div>
            <div className='flex gap-6 my-10 py-20 px-10 bg-no-repeat bg-cover justify-center items-center' style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/boiled-large-octopus-with-grilled-vegetables-black-stone-plate-seafood-top-view-free-space-your-text_187166-42780.jpg?w=1380")' }}>
                {recipeList}
            </div>
            <ToastContainer></ToastContainer>
        </div>

    )
}

export default RecipeCard