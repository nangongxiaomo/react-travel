import { createStore } from 'redux'
import reducer from './language/languageReducer'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)
/* eslint-enable */

export type RootState = ReturnType<typeof store.getState>

export default store
