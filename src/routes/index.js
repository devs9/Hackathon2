import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRoute'

export const RootStack = () => {
  const [routes] = useState([
    {
      path: '/',
      component: Home,
      isPrivate: false,
      isExact: true,
    },
  ])

  return (
    <>
      <Switch>
        {routes.map(({ path, component, isPrivate, isExact, redirect }) =>
          isPrivate ? (
            <PrivateRoute
              path={path}
              redirect={redirect}
              component={component}
              exact={isExact}
              key={path}
            />
          ) : (
            <Route
              path={path}
              component={component}
              exact={isExact}
              key={path}
            />
          )
        )}
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
