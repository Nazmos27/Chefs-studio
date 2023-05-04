import React from 'react'
import { useLoaderData } from 'react-router-dom'
import RecipeCard from './RecipeCard';

const ChefSection = () => {
    const recipe_data = useLoaderData()
    console.log(recipe_data);
    const {id,recipe_name , cooking_method } = recipe_data
    console.log(recipe_name);

    // const recipeList = recipe_name.map(item =>
    //     <div><RecipeCard item={item}
    //     data={recipe_data}
        
    //     ></RecipeCard></div>
    // )
    
    
    
return(
   
    <div>
        <RecipeCard data={recipe_data}></RecipeCard>
    </div>

)

}

export default ChefSection