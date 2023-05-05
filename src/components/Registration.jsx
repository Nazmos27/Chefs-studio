import React, { useContext, useState } from 'react'
import { AuthContext } from '../Authproviders/AuthProviders'
import { updateProfile } from "firebase/auth";






const Registration = () => {
  const [success, setSuccess] = useState('')
  const [errormsg, setErrormsg] = useState('')
  const {user, createUser  } = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const photo = form.photo.value
    const username = form.name.value 
    const password = form.password.value
    console.log(username);
    console.log(photo);
    setSuccess('')
    setErrormsg('')

    

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        event.target.reset()
        setSuccess("Registration Completed")

        updateProfile(result.user, {
          displayName: username, photoURL: photo
        })
        .then(()=> {
          console.log("Profile Updated")
        })
        .catch(error => console.log(error.message))
      })
      .catch(error => {
        setErrormsg(error.message)
      })

      

  }




  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="User Name" className="input input-bordered" />
              </div><div className="form-control">
                <label className="label">
                  <span className="label-text">User Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="User Photo URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <small className='text-blue-600'>{success}</small>
                <small className='text-red-600'>{errormsg}</small>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Registration