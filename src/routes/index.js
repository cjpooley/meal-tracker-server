import { addIngredientRoute } from './addIngredientRoute.js';
import { addMealRoute } from './addMealRoute.js';
import { deleteIngredientRoute } from './deleteIngredientRoute.js';
import { deleteMealRoute } from './deleteMealRoute.js';
import { getIngredientsRoute } from './getIngredientsRoute.js';
import { getMealsRoute } from './getMealsRoute.js';
import { getShoppingListRoute } from './getShoppingListRoute.js';
import { searchRecipesRoute } from './searchRecipesRoute.js';

export const routes = [
  addIngredientRoute,
  addMealRoute,
  deleteIngredientRoute,
  deleteMealRoute,
  getIngredientsRoute,
  getMealsRoute,
  getShoppingListRoute,
  searchRecipesRoute,
];