import React from 'react'

const Services = () => {
  return (
    <div>
        <div className='flex justify-center gap-16 items-center py-20 px-20'>
            <img src="https://images.squarespace-cdn.com/content/5e484ab628c78d6f7e602d73/1600141394687-F2HDW8EXX50T6SV6L7T5/What-to-eat-in-Italy.png?format=1500w&content-type=image%2Fpng" alt="" className='md:h-[400px] md:w-[600px] h-44 w-64 rounded-lg drop-shadow-2xl' />
            <div className='space-y-2'>
                <h1 className='md:text-4xl md:font-bold text-zinc-600'>Our Services</h1>
                <p className='md:text-xl italic'>We Provide italian Food From the world's best Italian chef</p>
                <ul className='list-disc pl-4'>
                    <li>Order Anytime</li>
                    <li>Get delivery between 2hrs(depending on item you ordered)</li>
                    <li>Customized Ingredients</li>
                    <li>Delivery to your Home</li>
                    <li>We Always serve Fresh Food</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Services