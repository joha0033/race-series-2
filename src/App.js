import React from 'react'
import { RoutingProvider, Route } from './Context/Authorization/Routing/routing'
import { AuthProvider, AuthRoute } from './Context/Authorization/authorization'
import { StyleProvider, AppStyle } from './Context/Style/style'
import { AppLayout } from './components/AppLayout'
import './App.css'


const Log = ({ componentName }) => (
  <>
    {console.log(componentName)}
  </>

)

export const App = () => {
  return (
    <StyleProvider>
      <RoutingProvider>
        <AuthProvider>
          <AppLayout>
            <AuthRoute>
              <div className={'main'}>
                <Route
                  href="/admin/races/">
                  <Log componentName={'RACES'} />
                  <h1>Races</h1>
                </Route>
                <Route href="/admin/participants/">
                  <Log componentName={'PARTS'} />
                  <h1>Participants</h1>
                </Route>
              </div>
            </AuthRoute>
          </AppLayout>
        </AuthProvider>
      </RoutingProvider>
    </StyleProvider>

  )
}