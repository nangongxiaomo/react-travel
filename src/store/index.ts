import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducer from './language/languageReducer'
import recommendReducer from './recommendProduct/recommendReducer'
import { actionLog } from './middlewares/middlewares'
import detailSlice from './detail/slice'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const rootReducers = combineReducers({
  language: reducer,
  recommendReducer,
  detailSliceReducer: detailSlice.reducer
})

/* eslint-disable no-underscore-dangle */
// const store = createStore(
//   rootReducers,
//   composeEnhancers(applyMiddleware(thunk, actionLog))
// )
const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), actionLog],
  devTools: true
})

/* eslint-enable */

export type RootState = ReturnType<typeof store.getState>

export default store
