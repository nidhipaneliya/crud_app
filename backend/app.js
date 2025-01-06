const express = require('express'); // Importing express
const app = express(); // Creating an express app
const cors = require("cors");
const http = require("http");
const envConfig = require('./config/envConfig');
const catchAsync = require('./config/catchAsync');
const server = http.createServer(app);
require('./config/db')
global.catchAsync = catchAsync;

app.use(cors());
app.options("*", cors());
app.use(express.json({ limit: envConfig.BODY_SIZE }));
app.use(express.urlencoded({ limit: envConfig.BODY_SIZE, extended: true }));
app.use(express.json());

app.use('/',require('./routes/index'))

// Set up the server to listen on port 3000
server.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});