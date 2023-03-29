# FoodieFinder Project
FoodieFinder is a web application that helps users find and discover new restaurants in their area based on their preferences, and allows for user restaurant saving. This project was developed as part of ALX software engineering course.

## Architecture
The application was built using a client-server architecture. The frontend was built using ReactJs, while the backend was built using Node.js and Express.js. The database used was MongoDB, and the Mapbox API was used for mapping and location-based services.

## Technologies and Third-Party Services
- Node.js
- Express.js
- MongoDB
- Mapbox API

## Installation
1. Clone the repository: git clone https://github.com/Joelayo/foodie-finder.git
2. Install dependencies: npm install
3. Create a .env file and add the following variables:
```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/foodiefinder
MAPBOX_TOKEN=your-mapbox-token
JWT_SECRET=your-jwt-secret
```
4. Start the server: npm start
5. Open your browser and navigate to http://localhost:3000

## License
This project is licensed under the MIT License. See the LICENSE file for details.

