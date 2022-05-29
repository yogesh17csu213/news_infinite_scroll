
import logger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import CommonReducer from './reducers/common'
let store
const appReducer = combineReducers({
  NewsReducer:CommonReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

function initStore(initialState) {
  const middleware = [thunkMiddleware]
  middleware.push(logger);
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }
  if (typeof window === 'undefined') return _store
  if (!store) store = _store
  return _store
}

export function useStore(initialState) {
  const store = initializeStore(initialState)
  return store
}