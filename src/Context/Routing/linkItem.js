import React, { useContext } from 'react'
import { RoutingContext } from './routing'
import { AuthContext } from '../Authorization/authorization'
import { StyleContext } from '../Style/style'

export const LinkItem = ({ activeStyle, children, ...props }) => {
  const routingContext = useContext(RoutingContext)
  const authContext = useContext(AuthContext)
  const styleContext = useContext(StyleContext)

  return (
    <div>
      <a
        {...props}
        style={{
          ...props.style,
          ...(authContext.isAuth
            ? (routingContext.pathname === props.href
              ? activeStyle
              : {})
            : props.disabledStyle)
        }}
        onClick={(e) => {
          e.preventDefault()
          return authContext.isAuth
            ? routingContext.navigate(props.href)
            : styleContext.toggleShake()
        }}
      >
        {children}
      </a>
    </div>
  )
}