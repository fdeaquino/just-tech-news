// The router instance in routes/index.js collects everything and packages them up for server.js to use
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// by changing the force configuration parameter to true, the database connection must sync with the model definitions and associations (Similar functionality to the DROP IF TABLE EXISTS in sql)
// Save and restart the server. Once tables are dropped, CHANGE BACK to false
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

