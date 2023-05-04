import React, { useContext, useState } from 'react'
import { AuthContext } from '../Authproviders/AuthProviders'
import { useLocation, useNavigate } from 'react-router-dom'


const LogIn = () => {
  const [success, setSuccess] = useState('')
  const [errormsg, setErrormsg] = useState('')
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleSignIn = (event) => {
    setSuccess('')
    setErrormsg('')
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess("User login successful")
        navigate(from , {replace:true})
      })
      .catch(error => {
        console.log(error.message);
        setErrormsg(error.message)
      })
  }
  return (
    <form onSubmit={handleSignIn}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <small className='text-blue-600'>{success}</small>
                <small className='text-red-600'>{errormsg}</small>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LogIn