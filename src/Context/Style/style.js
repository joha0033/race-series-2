import React, { useReducer, useContext } from 'react'

// split up your contexts!!!!
export const StyleContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_SHAKE':
      return {
        ...state,
        shake: true
      }
    case 'STOP_SHAKE':
      return {
        ...state,
        shake: false
      }
    default: return state
  }
}

export const StyleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    shake: false,
    toggleShake: () => toggleShake(),
  })

  const startShake = () => dispatch({
    type: 'START_SHAKE'
  })

  const stopShake = () =>
    setTimeout(() =>
      dispatch({
        type: 'STOP_SHAKE'
      }), 500)

  const toggleShake = () => {
    startShake()
    return stopShake()
  }

  return (
    <StyleContext.Provider value={state}>
      {children}
    </StyleContext.Provider>
  )
}

export const AppStyle = ({ children, href }) => {
  const context = useContext(StyleContext)
  return (
    <div>
      {context.pathname === href ? children : null}
    </div>
  )
}

// export default AppProvider