import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './language/languageReducer'
import recommendReducer from './recommendProduct/recommendReducer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const rootReducers = combineReducers({
  language: reducer,
  recommendReducer
})

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
)
/* eslint-enable */

export type RootState = ReturnType<typeof store.getState>

export default store
