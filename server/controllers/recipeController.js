const Recipe = require('../models/recipe');

exports.recipe_list = (req, res) => {
    Recipe.find({}, (err, recipes) => {
        res.status(200).json(recipes)
    })
};

exports.recipe_create = (req, res) => {
    let recipe = new Recipe(req.body);
    recipe.save();
    res.status(201).json(recipe);
};