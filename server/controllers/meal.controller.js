import mealService from "../services/meal.service";

const mealController = {
  fetchAllMeals(req, res) {
    const allMeals = mealService.fetchAllMeals();
    return res
      .json({
        status: "success",
        data: allMeals
      })
      .status(200);
  },

  addAMeal(req, res) {
    /*  Expect json of format 
        {
            name : "some food",
            size : "large",
            price : "some price",          
        }   */

    const newMeal = req.body;
    const createdMeal = mealService.addNewMeal(newMeal);
    return res
      .json({
        status: "success",
        data: createdMeal
      })
      .status(201);
  },

  getAMeal(res, req) {
    const mealId = req.params.id;
    const foundMeal = mealService.getAMeal(mealId);
    return res
      .json({
        status: "success",
        data: foundMeal
      })
      .status(200);
  }
};
