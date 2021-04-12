import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { Container, Spinner } from 'react-bootstrap'

// routes config
import routes from '../routes'
  
const loading = (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
)

const TheContent = () => {
  return (
    <main className="c-main">
      <Container fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              )
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </Container>
    </main>
  )
}

export default React.memo(TheContent)
