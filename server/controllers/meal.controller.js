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

  static async addNewMeal(req, res) {
    /*  Expect json of format 
        {
            name : "some food",
            size : "large",
            price : "some price",          
        }   */

    const newMeal = req.body;
    const createdMeal = await mealService.addNewMeal(newMeal);
    return res
      .json({
        status: 'success',
        data: createdMeal
      })
      .status(201);
  }

  static getAMeal(req, res) {
    const mealId = req.params.id;
    // console.log(mealId);
    const foundMeal = mealService.getAMeal(mealId);
    return res
      .json({
        status: 'success',
        data: foundMeal
      })
      .status(200);
  }

  static updateMeal(req, res) {
    const mealId = req.params.id;
    const foundMeal = mealService.updateMeal(mealId);
    foundMeal.name = req.body.name;
    foundMeal.size = req.body.size;
    foundMeal.price = req.body.price;
    // console.log(req.body);
    return res.json({
      status: 'success',
      data: foundMeal
    });
  }

  static deleteMeal(req, res) {
    const mealId = req.params.id;
    const leftMeals = mealService.deleteMeal(mealId);
    return res.json({
      status: 'success',
      data: leftMeals
    });
  }
}

export default mealController;
