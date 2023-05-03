import React from 'react'
import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    )
}

export default Home