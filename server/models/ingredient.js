import mongoose from 'mongoose';

// Create a schema (data structure) fot the database entries
const ingredientSchema = mongoose.Schema({
    name: String,
    ref_qt: {
        type: Number,
        default: 100
    },
    is_dish: Boolean,
    kcals: Number,
    carbs: Number,
    fats: Number,
    proteins: Number,
    fibers: Number,
    sugars: Number
});

const ingredient = mongoose.model('ingredient', ingredientSchema);

export default ingredient;