import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/boiled-large-octopus-with-grilled-vegetables-black-stone-plate-seafood-top-view-free-space-your-text_187166-42780.jpg?w=1380")' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome to our cooking website! We're thrilled that you've decided to join us on your culinary journey. Our mission is to inspire and empower you to create delicious and healthy meals for yourself and your loved ones. Whether you're a seasoned chef or a beginner in the kitchen, we have a wealth of recipes, tips, and techniques to help you develop your skills and explore new flavors. So come on in, grab your apron, and let's get cooking!</p>
                    <Link to="/login"><button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner