import React, { useReducer, useContext } from 'react'
import { AdminForm } from './form'


export const AuthContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_AUTH': return {
      ...state,
      isAuth: action.isAuth
    }
    default: return state
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
    toggleAuth: (isAuth) => dispatch({ type: 'TOGGLE_AUTH', isAuth: !isAuth })
  })

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthRoute = ({ children, href }) => {
  const context = useContext(AuthContext)

  return (
    <div>
      {context.isAuth ? children : (<AdminForm />)}
    </div>
  )
}