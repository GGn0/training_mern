import {combineReducers} from 'redux';
import ingredients from './ingredients';

export default combineReducers(
    // include all the reducers to combine.
    ingredients, // ingredients: ingredients, == ingredients,
);