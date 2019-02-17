import express from 'express';
import mealController from '../controllers/meal.controller';

const router = express.Router();

// console.log(mealController);
router.get('/', mealController.fetchAllMeals);

export default router;
