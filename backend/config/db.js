const mongoose = require("mongoose")

//Master DB Connection
const dbConfigure = config.server.DB_USERNAME && config.server.DB_PASSWORD ? `${config.server.DB_USERNAME}${config.server.DB_PASSWORD}` : '';
const dbConnection = `${config.server.DB_CONNECTION}://${dbConfigure}${config.server.DB_HOST}${config.server.DB_PORT}/${config.server.DB_DATABASE}?authSource=admin`;


const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connection.on('connected', async () => {
      return console.log('connected')
})

mongoose.connection.on('error', async () => {
      return console.log('error')
})

mongoose.connection.on('disconnect', async () => {
      return console.log('disconnect')
})

mongoose.connect(dbConnection,dbOptions).catch((err) => {
      console.error("error while connecting to Master DATABASE:" + err);
    });
    