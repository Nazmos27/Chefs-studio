import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Authproviders/AuthProviders'
import ActiveLink from './ActiveLink'

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext)


    const handleLogout = () => {
        logOut()
        .then()
        .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <ActiveLink to='/' className="btn btn-ghost normal-case text-xl" >daisyUI</ActiveLink>
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
                    user?
                    <button onClick={handleLogout} className="btn">Log Out</button>:
                    <ActiveLink to="/login"><button className="btn">Log In</button></ActiveLink>
                }

                </div>
            </div>
        </div>
    )
}

export default NavigationBar