import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './common/css/index.css'
import 'antd/dist/antd.css'
import App from './App'
import './i18n'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate persistor={store.persistedStore} loading={null}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
