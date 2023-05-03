import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ChefSection = () => {
    const recipe_data = useLoaderData()
    console.log(recipe_data);
    const {id,recipe_name} = recipe_data
    console.log(recipe_name);
    const recipeList = recipe_name.map(item =>
        <li>{item}</li>
    )
    console.log(recipeList);
    
return(
   
    <ul>{recipeList}</ul>

)

}

export default ChefSection