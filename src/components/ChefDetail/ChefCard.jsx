import React from 'react'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { FaBaby, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";


const ChefCard = ({ data }) => {
    console.log(data);
    const { id, chef_name, chefs_img, experience, number_of_recipes , rating } = data
    return (
        <div>
            <div className=" hero py-10 px-6 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chefs_img} className="h-60 w-44 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{chef_name}</h1>
                        <span className='text-green-500 md:text-xl text-sm'>Years of Experience : {experience}</span><br />
                        <p><small className=''>Number of Recipes : {number_of_recipes}</small></p>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            
                            emptySymbol= {<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                            fullSymbol={<FaStar></FaStar>}
                        /> <br />
                        <Link to={`/chefsection/${id}`}><button className="btn btn-outline btn-info">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChefCard