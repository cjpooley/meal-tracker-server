import { db } from './db.js';

export const getRecipes = async () => {
  const connection = await db.getConnection();
  const recipes = await connection.collection('recipes').find({}).toArray();
  return recipes;
}