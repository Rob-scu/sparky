import { createStore, combineReducers } from 'redux'
import camperSorter from './campers/module'

const store = createStore(
  combineReducers({ camperSorter }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
