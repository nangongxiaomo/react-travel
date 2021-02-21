import React from 'react'
import ReactDOM from 'react-dom'
import './common/css/index.css'
import 'antd/dist/antd.css'
import App from './App'
import './i18n'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
