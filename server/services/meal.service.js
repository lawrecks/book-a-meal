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
  }
};

export default mealService;
