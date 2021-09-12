const express = require('express');
let recipeRouter = express.Router();

let recipe_controller = require('../controllers/recipeController');

recipeRouter.route('/')
    .get(recipe_controller.recipe_list)
    .post(recipe_controller.recipe_create);

module.exports = recipeRouter;