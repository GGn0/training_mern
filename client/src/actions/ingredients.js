import * as api from '../api';

// Create actions creator (functions that return actions)
// Use thunk to specify another "intermediate" arrow function to have access to dispatch
export const getIngredients = () => async (dispatch) => {
    try {
        // Destructure the data
        const { data } = await api.fetchIngredients();
        
        const action = { type: 'FETCH_ALL',payload: data}
        // Dispatch instead of returning the action
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }

    
}