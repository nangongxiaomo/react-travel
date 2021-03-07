import { Middleware } from 'redux'

export const actionLog: Middleware = store => next => action => {
  console.log('prev state:', store.getState())
  console.log('action:', action)
  next(action)
  console.log('next state:', store.getState())
}
