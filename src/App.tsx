import React, { Suspense } from 'react'
import { Footer, Header } from './components'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import { Spin } from 'antd'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense
        fallback={
          <Spin
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate3d(-50%, -50%, 0)'
            }}
            size="large"
          />
        }
      >
        <Switch>{renderRoutes(routes)}</Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
