import React from 'react'

const RecipeCard = ({item,method,data}) => {
    console.log(data);
  return (
    <div>
        <ul className='text-center'>
            <li>{item}</li>
            <li>{method}</li>
        </ul>
    </div>
  )
}

export default RecipeCard