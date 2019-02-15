import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import jokes from './jokesReducer'
import categories from './categoriesReducer'

export default combineReducers({
  jokes,
  categories,
  routing: routerReducer,
})
