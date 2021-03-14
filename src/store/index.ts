import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './language/languageReducer'
import recommendReducer from './recommendProduct/recommendReducer'
import { actionLog } from './middlewares/middlewares'
import detailSlice from './detail/slice'
import { searchSlice } from './search/searchSlice'
import userSlice from './user/userSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer']
}

const rootReducers = combineReducers({
  language: reducer,
  recommendReducer,
  detailSliceReducer: detailSlice.reducer,
  searchReducer: searchSlice.reducer,
  userReducer: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    actionLog
  ],
  devTools: true
})

const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { persistedStore, store }
