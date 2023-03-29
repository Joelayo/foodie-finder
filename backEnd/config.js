require('dotenv').config(); // Import environment variables from .env file

module.exports = {
  PORT: process.env.PORT || 4000, // Set port for Express server
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://test:testuser@foodiefinder.sy2joof.mongodb.net/?retryWrites=true&w=majority', // Set MongoDB connection URI
  JWT_SECRET: process.env.JWT_SECRET || 'secretkey', // Set JWT secret key
};
