import express from 'express';
import { createIngredient, getIngredients } from '../controllers/ingredients.js';

const router = express.Router();

// Callback function when localhost:PORT/ is visited
router.get('/', getIngredients);
router.post('/', createIngredient);

export default router;