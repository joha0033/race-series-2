import React, { useContext } from 'react'
import { StyleContext } from '../Style/style'
import { AuthContext } from './authorization'
import './styles.css'

// ADD STYLES FROM App.js TO styles.js in this directory!

export const AdminForm = () => {
  const styleContext = useContext(StyleContext)
  const authContext = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isAuth, toggleAuth } = authContext
    return toggleAuth(isAuth)
  }

  return (
    < div className={
      styleContext.shake
        ? 'shake-it form-container'
        : 'form-container'
    }>
      <form
        onSubmit={event => handleSubmit(event)}
        className={'center-content login-form'}>
        <div>
          <h2
            className={'title center-content'}>
            Admin Login
          </h2>
          <div className={'form'}>
            <label htmlFor='email'>Email: </label>
            <input
              className={'custom-input'}
              name='email'
              type='email' required />
            <button
              className={'submit-button'}>
              Submit
          </button>
          </div>
        </div>
      </form>
    </div >
  )
}