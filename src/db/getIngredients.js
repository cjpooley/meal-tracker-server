import { db } from './db.js';

export const getIngredients = async () => {
  const connection = await db.getConnection();
  const ingredients = await connection.collection('ingredients').find({}).toArray();
  return ingredients;
}