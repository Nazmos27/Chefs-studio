import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Authproviders/AuthProviders'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56 mx-auto"></progress>
    }
    if (user){
        return children
    }
    else{
        alert('Please Login To proceed')
        return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
         
    }

}

export default PrivateRoute