import axios from 'axios'

// The URL pointing to the backend api
const url = 'http://localhost:4000/ingredients'

// The function are created in actions
export const fetchIngredients = () => axios.get(url)

export const createIngredient = (newIngredient) => axios.post(url, newIngredient, {headers: {'Content-Type': 'application/json'}});