// A reducer is a function requiring a state (ingredients) and an action.
// The logic depends on the action type
// The state cannot be null, therefore the initialization

// As soon as an action is dispatched, the function will be executed
export default (ingredients = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return [...ingredients, action.payload]
    default:
      return ingredients
  }
}
