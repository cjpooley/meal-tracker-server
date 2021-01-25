import pkg from 'mongodb';
const { ObjectID } = pkg;
import { db } from './db.js';

export const deleteMeal = async (id) => {
  const connection = db.getConnection();
  await connection.collection('meals').deleteOne({ _id: ObjectID(mealId) });
}