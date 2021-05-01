import ingredientsModel from "../models/ingredient.js";

// Controllers keep the logic separated from the routes
// This is to make the application more scalable

// not exporting as default. it will be imported by name with { }
export const getIngredients = async (req, res) => {
    try {
        const ingredientsData = await ingredientsModel.find();

        res.status(200).json(ingredientsData);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const createIngredient = (req, res) => {
    res.send('Creating ingredient');
}