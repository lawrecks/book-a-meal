import dummyData from '../utilities/dummyData';
import Meal from '../models/meal.model';

const mealService = {
  fetchAllMeals() {
    return dummyData.meals.map(meal => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;

      return newMeal;
    });
  },

  addNewMeal(meal) {
    const newMeal = meal;
    const lengthOfMeal = dummyData.meals.length;
    const lastMealId = dummyData.meals[lengthOfMeal - 1].id;
    const newMealId = lastMealId + 1;
    newMeal.id = newMealId;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(mealId) {
    const requiredMeal = dummyData.meals.find(meal => meal.id == mealId);
    // console.log(dummyData.meals);
    return requiredMeal || [];
  },

  updateMeal(mealId) {
    const mealToBeUpdated = dummyData.meals.find(meal => meal.id == mealId);
    return mealToBeUpdated || [];
  },

  deleteMeal(mealId) {
    const mealToBeDeleted = dummyData.meals.find(meal => meal.id == mealId);
    if (mealToBeDeleted == undefined) {
      return 'Meal not found';
    }
    const mealIndex = dummyData.meals.indexOf(mealToBeDeleted);
    dummyData.meals.splice(mealIndex, 1);
    return dummyData.meals;
  }
};

export default mealService;
