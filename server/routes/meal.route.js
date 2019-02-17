import express from 'express';
import mealController from '../controllers/meal.controller';

const router = express.Router();

// console.log(mealController);
router.get('/', mealController.fetchAllMeals);
router.post('/', mealController.addNewMeal);
router.get('/:id', mealController.getAMeal);
router.put('/:id', mealController.updateMeal);

export default router;
