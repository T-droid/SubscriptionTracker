import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from '../config/env.js';
import process from 'process'

if (!DB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.<developement/production>local');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to the database in  ${NODE_ENV}`);
    } catch (error) {
        console.error('Error connecting to the database: ', error.message);
        process.exit(1);
    }
}

export default connectToDatabase;