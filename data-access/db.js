const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const mongoUri = 'mongodb+srv://seanberlin2_db_user:fZDW51UqH6YFaeQJ@ticketsystemdb.gcweep8.mongodb.net/titanhelp?retryWrites=true&w=majority&appName=TICKETSYSTEMDB';

async function connectDB() {
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected to Atlas');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;