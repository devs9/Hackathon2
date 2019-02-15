import React from 'react'
import { Route, Redirect } from 'react-router'

export default ({ component: Component, redirect, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: redirect }} />
      )
    }
  />
)
