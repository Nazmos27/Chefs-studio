import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import RecipeCard from './RecipeCard';

const ChefSection = () => {
    const recipe_data = useLoaderData()
    const [chefdata, setchefdata] = useState([]);
    console.log(recipe_data);
    const {id } = recipe_data
    // console.log(recipe_name);
    useEffect(()=>{
        fetch(`https://assignment-10-server-nazmos27.vercel.app/chefs_data/${id}`)
        .then(res=>res.json())
        .then(data=>setchefdata(data))
    },[])


    
    
    
return(
   
    <div>
        <RecipeCard chefdata={chefdata} data={recipe_data}></RecipeCard>
    </div>

)

}

export default ChefSection