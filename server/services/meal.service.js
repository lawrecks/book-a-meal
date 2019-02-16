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
    });
  },

  addNewMeal(meal) {
    const newMeal = meal;
    const lengthOfMeal = dummyData.meals.length;
    const lastMealId = dummyData.meals[lengthOfMeal - 1].id;
    const newMealId = lastMealId + 1;
    newMeal.id = newMealId;
    dummyData.meals.push(meal);
  },

  getAMeal(id) {
    const requiredMeal = dummyData.meals.find(meal => meal.id == id);
    return requiredMeal;
  }
};

export default mealService;
