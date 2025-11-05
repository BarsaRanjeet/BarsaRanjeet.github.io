import React from 'react'
import Header from '../../../components/header/Header'
import '@assets/scss/pages/_register.scss'

const Register = () => {
  return (
    <div className='register-page'>
      <div>
        <Header/>
      </div>
      <div className='register-wrapper'>
        <div className='register-card'>
          <div className='register-card-body'>
            <form className='register-form'>
              <h1 className='register-title'>Register</h1>
              <p className='register-subtitle'>Create your account</p>

              <div className='form-group'>
                <label className='visually-hidden' htmlFor='reg-username'>Username</label>
                <input id='reg-username' name='username' placeholder='Username' autoComplete='username' />
              </div>

              <div className='form-group'>
                <label className='visually-hidden' htmlFor='reg-email'>Email</label>
                <input id='reg-email' name='email' type='email' placeholder='Email' autoComplete='email' />
              </div>

              <div className='form-group'>
                <label className='visually-hidden' htmlFor='reg-password'>Password</label>
                <input id='reg-password' name='password' type='password' placeholder='Password' autoComplete='new-password' />
              </div>

              <div className='form-group'>
                <label className='visually-hidden' htmlFor='reg-password2'>Repeat password</label>
                <input id='reg-password2' name='password2' type='password' placeholder='Repeat password' autoComplete='new-password' />
              </div>

              <div className='form-actions'>
                <button type='button' className='btn btn-success'>Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
