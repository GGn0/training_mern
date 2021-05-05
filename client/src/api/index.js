import axios from 'axios'

// The URL pointing to the backend api
const url = 'http://loclhost:4000/ingredients'

export const fetchIngredients = () => axios.get(url)
