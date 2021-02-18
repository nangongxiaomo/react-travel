import React, { Suspense } from 'react'
import { Footer, Header } from './components'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Switch>{renderRoutes(routes)}</Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
