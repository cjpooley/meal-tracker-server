import { getPopulatedMeals } from '../db/index.js';

export const getMealsRoute = {
  method: 'get',
  path: '/meals',
  handler: async (req, res) => {
    const meals = await getPopulatedMeals();
    res.status(200).json(meals);
  },
}