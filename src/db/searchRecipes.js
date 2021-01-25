import { db } from './db.js';

export const searchRecipes = async (searchString) => {
  const connection = await db.getConnection();
  const recipes = await connection.collection('recipes').find({ $text: { $search: searchString }}).toArray();
  return recipes;
}