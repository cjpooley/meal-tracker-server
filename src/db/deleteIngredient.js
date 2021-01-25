import pkg from 'mongodb';
const { ObjectID } = pkg;
import { db } from './db.js';

export const deleteIngredient = async (name) => {
  const connection = db.getConnection();
  await connection.collection('ingredients').deleteOne({ name: name });
}