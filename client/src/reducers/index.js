import { combineReducers } from 'redux'
import ingredients from './ingredients.js'

export default combineReducers({
  // include all the reducers to combine.
  ingredients // ingredients: ingredients, == ingredients,
})
