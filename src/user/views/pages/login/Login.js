import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/header/Header'
import '@assets/scss/pages/_login.scss'

const Login = () => {
  return (
    <div className='login-page'>
      <div>
        <Header/>
      </div>
      <div className='login-wrapper'>
        <div className='login-container'>
          <div className='login-card'>
            <div className='login-card-body'>
              <form className='login-form'>
                <h1 className='login-title'>Login</h1>
                <p className='login-subtitle'>Sign In to your account</p>

                <div className='form-group'>
                  <label className='visually-hidden' htmlFor='username'>Username</label>
                  <input id='username' name='username' placeholder='Username' autoComplete='username' />
                </div>

                <div className='form-group'>
                  <label className='visually-hidden' htmlFor='password'>Password</label>
                  <input id='password' name='password' type='password' placeholder='Password' autoComplete='current-password' />
                </div>

                <div className='form-actions'>
                  <button type='button' className='btn btn-primary'>Login</button>
                  <button type='button' className='btn btn-link'>Forgot password?</button>
                </div>
              </form>
            </div>
          </div>

          <div className='login-side'>
            <div className='login-side-body'>
              <h2>Sign up</h2>
              <p>
                Welcome! If you are new here, please register to create an account.
                You can log in once your registration is approved by the admin.
              </p>
              <Link to='/register'>
                <button type='button' className='btn btn-secondary'>Register Now!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
