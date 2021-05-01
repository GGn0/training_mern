import express from 'express';
import { getIngredients } from '../controllers/ingredients.js';

const router = express.Router();

// Callback function when localhost:PORT/ is visited
router.get('/', getIngredients);

export default router;