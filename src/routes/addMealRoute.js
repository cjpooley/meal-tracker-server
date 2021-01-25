import { getPopulatedMeals, insertMeal } from '../db/index.js';

export const addMealRoute = {
  method: 'post',
  path: '/meals',
  handler: async (req, res) => {
    const { date, recipeId } = req.body;
    const newMeal = {
      recipeId,
      plannedDate: date,
    };
    await insertMeal(newMeal);
    const updatedMeals = await getPopulatedMeals();
    res.status(200).json(updatedMeals);
  },
}