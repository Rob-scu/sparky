import camperSorter, { allTimeCampers, receiveCampers } from './campers/module'
import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

// THE WORK:
const routesMap = {
  HOME: {
    path: '/',
    thunk: async (dispatch, getState) => {
      dispatch({ type: 'THE_THUNK' })
      console.log(getState()) // we have access to redux state
      const p = await fetch(
        'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      )
      const stuff = await p.json()
      console.log(stuff)
      dispatch(receiveCampers(stuff))
    },
  },
  ALLTIME: {
    path: '/alltime',
    thunk: async (dispatch, getstate) => {
      // dispatch({ type: 'THIS_IS_JUST_AN_EXAMPLE_AND_IS_NOT_NEEDED_TO_ACCOMPLISH_OUR_TASK' })
      const p = await fetch(
        'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
      )
      const stuff = await p.json()
      dispatch(receiveCampers(stuff))
    },
  },
  ITEM: '/:id',
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspects

// and you already know how the story ends:
const rootReducer = combineReducers({ location: reducer, camperSorter })
const middlewares = applyMiddleware(middleware)
// note the order: enhancer, then middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(enhancer, middlewares))

export default store
