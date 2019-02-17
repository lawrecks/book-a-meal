import mealService from '../services/meal.service';

class mealController {
  static async fetchAllMeals(req, res) {
    const allMeals = await mealService.fetchAllMeals();
    return res
      .json({
        status: 'success',
        data: allMeals
      })
      .status(200);
  }
}

export default mealController;
