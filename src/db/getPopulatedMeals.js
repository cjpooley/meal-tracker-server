import { getMeals } from './getMeals.js';
import { getRecipes } from './getRecipes.js';

export const getPopulatedMeals = async () => {
  const meals = await getMeals();
  const recipes = await getRecipes();

  const populatedMeals = meals.map(meal => ({
    ...meal,
    recipe: recipes.find(recipe => recipe.id === meal.recipeId),
  }));

  return populatedMeals;
}