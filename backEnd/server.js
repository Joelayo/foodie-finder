require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
// const port = process.env.PORT || 4000;

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }); // Connect to the MongoDB database (environment variable is the database connection string)

app.use(express.json()); // Allows the Express server to parse and utilize JSON requests (this is a type of middleware between your request and the Express server)
app.use(cors());
app.use("/userHandler", require('./routes/userHandler.js')); // Allows the Express server to use the created routes in (./routes/userHandler.js)

// app.listen(port, () => console.log("Server Started")); // Used to bind/listen for connections and requests on the specified host
app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`);
  });