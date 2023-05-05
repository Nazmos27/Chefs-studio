import React, { useContext, useState } from 'react'
import { AuthContext } from '../Authproviders/AuthProviders'
import { useLocation, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';

const auth = getAuth();

const LogIn = () => {
  const [show,setShow] = useState(false)
  const [success, setSuccess] = useState('')
  const [errormsg, setErrormsg] = useState('')
  const { signIn } = useContext(AuthContext)
  const provider = new GoogleAuthProvider()
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
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error.message);
        setErrormsg(error.message)
      })
  }



  const handleGoogleLogIn = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        const user = res.user
        navigate(from, { replace: true })

      })
      .catch(error => {
        console.log(error.message);
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
                  <input type={show ? "text":"password"} name='password' placeholder="password" className="input input-bordered" />
                  <p className='text-right' onClick={() => setShow(!show)}><small>
                    {
                      show ? <div className='flex items-center'><FaEye></FaEye> <p>Hide Password</p> </div> : <div className='flex items-center'><FaEyeSlash></FaEyeSlash> <p>Show Password</p> </div>
                    }
                    </small></p>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                  <small className='text-blue-600'>{success}</small>
                  <small className='text-red-600'>{errormsg}</small>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <small className='text-purple-700 text-center'>Sign Up With</small>
                <div className='flex justify-center gap-2 text-gray-500 '>

                  <FaGoogle onClick={handleGoogleLogIn} className='h-6 w-6'></FaGoogle>
                  <FaGithub className='h-6 w-6'></FaGithub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }

  export default LogIn