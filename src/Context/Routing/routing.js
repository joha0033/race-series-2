import React, { useReducer, useContext } from 'react'

// split up your contexts!!!!
export const RoutingContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PATH': return {
      ...state,
      pathname: action.pathname
    }
    default: return state
  }
}

export const RoutingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    pathname: window.location.pathname,
    navigate: (pathname) => {
      window.history.pushState(null, null, pathname)
      return dispatch({ type: 'UPDATE_PATH', pathname })
    }
  })

  return (
    <RoutingContext.Provider value={state}>
      {children}
    </RoutingContext.Provider>
  )
}

export const Route = ({ children, href }) => {
  const context = useContext(RoutingContext)
  return (
    <div>
      {context.pathname === href ? children : null}
    </div>
  )
}

// export default AppProvider