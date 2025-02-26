const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

Recipe.create({ title: 'Crepe', level: 'Amateur Chef', cuisine: 'France'})
  .then(recipe => console.log("The title is", recipe.title))
  .catch(err => console.log("An error happened", err));

Recipe.insertMany (data)
  .then(recipes => {recipes.forEach(recipe =>
    console.log("The title is", recipe.title)  
  )})
  .catch(err => console.log("An error happened", err));

