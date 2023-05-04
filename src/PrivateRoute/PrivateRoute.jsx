import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Authproviders/AuthProviders'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if (user){
        return children
    }
    else{
        alert('Please Login To proceed')
        return <Navigate to='/login' replace={true}></Navigate>
         
    }

}

export default PrivateRoute