import React, { useContext } from 'react'

import { AuthContext } from '../Authproviders/AuthProviders'
import ActiveLink from './ActiveLink'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);


    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))
    }
    return (
        <div className=''>
            <div className="navbar bg-base-100 md:px-40 md:py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ActiveLink to='/blog'><li>Blog</li></ActiveLink>
                            <ActiveLink to='/login'><li><a>Sign In</a></li></ActiveLink>
                            <ActiveLink to='/registration'><li><a>Register</a></li></ActiveLink>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl" >Chef's Studio</Link>
                    {/* <sub className='md:text-sm text-xsm'>Food From Heaven</sub> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <ActiveLink to='/blog'><li><a>Blog</a></li></ActiveLink>
                        <ActiveLink to='/login'><li><a>Sign In</a></li></ActiveLink>
                        <ActiveLink to='/registration'><li><a>Register</a></li></ActiveLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex items-center gap-3'>
                                <img src={user.photoURL} alt={user.displayName} className='w-14 rounded-full'/>
                                <button onClick={handleLogout} className="btn">Log Out</button>
                                
                            </div>
                            :
                            <ActiveLink to="/login"><button className="btn">Log In</button></ActiveLink>
                    }

                </div>
            </div>
        </div>
    )
}

export default NavigationBar