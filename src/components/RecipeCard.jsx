import React, { useEffect, useState } from 'react'

const RecipeCard = ({ data }) => {
    const [chefData,setChefData] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/chefs_data")
        .then(res => res.json())
        .then(info => setChefData(info))
    },[])

    




    const {id, cooking_method, ingredients, recipe_name, recipe_img } = data
    console.log(data);
    const recipeList = recipe_name.map((item, index) =>

        <div>
            <div className="text-white card w-[350px] glass">
                <figure><img src={recipe_img[index]} alt="car!" /></figure>
                <div className="card-body h-80">
                    <h2 className="card-title">{item}</h2>
                    <hr className='border-[1px] border-white'/>
                    <p>{cooking_method[index]}</p>
                    <p className='text-green-500'>Ingredients: {ingredients[index].join(", ")}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary mb-10">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    )
    for(let x in chefData){
        if(x.id == id){
            console.log(x);
        }
    }
    

    return (
        <div className='flex gap-6 my-10 py-20 px-10 bg-no-repeat bg-cover justify-center items-center' style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/boiled-large-octopus-with-grilled-vegetables-black-stone-plate-seafood-top-view-free-space-your-text_187166-42780.jpg?w=1380")' }}>
            {recipeList}
        </div>
    )
}

export default RecipeCard