import React from 'react'
import Banner from './Banner'
import ChefSection from './ChefSection'
import { useLoaderData } from 'react-router-dom'
import ChefCard from './ChefDetail/ChefCard'

const FrontPage = () => {
  const chef_data = useLoaderData()
  console.log(chef_data);
  return (
    <div>
        <Banner></Banner>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          {
            chef_data.map(item => <ChefCard 
              data = {item}
            ></ChefCard>)
          }
        </div>
    </div>
  )
}

export default FrontPage