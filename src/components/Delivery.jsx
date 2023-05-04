import React from 'react'
import sectionImg from '/Asset 1.png'

const Delivery = () => {
  return (
    <div>
        <div className='flex justify-center items-center gap-10 px-20'>
        <div >
            <h1 className='md:text-4xl md:font-semibold text-xl'><span className='text-green-400 font-bold italic'>Fast</span> & <span className='text-green-400 font-bold italic'>Safe</span> Delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aperiam atque velit quos quam recusandae autem vero debitis corporis quae non in fugit aliquam cumque eos laborum accusantium veritatis dolore itaque iste libero voluptatum officiis ipsam! At consectetur ea iusto, maxime quasi quia fuga eum! Porro nostrum eius odit illo.</p>
        </div>
        <img src={sectionImg} alt="" className='md:h-[400px] md:w-[500px] h-44 w-64 rounded-lg drop-shadow-2xl'/>
        </div>
        
    </div>
  )
}

export default Delivery