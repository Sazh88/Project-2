const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require ('./utils/helpers')
// import sequelize connection
const sequelize = require ('./config/connection.js')
const exphbs = require('express-handlebars');

const hbs = exphbs.create({helpers});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
})
