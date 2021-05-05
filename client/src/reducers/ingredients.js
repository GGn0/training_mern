// A reducer is a function requiring a state (ingredients) and an action.
// The logic depends on the action type
// The state cannot be null, therefore the initiallization

// As soon as an action is dispatched, thefunction will be executed
export default (ingredients = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return ingredients
    default:
      return ingredients
  }
}
