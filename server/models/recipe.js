const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
        recipeName:     String,
        ingredients:    [String],
        directions:     [String]
    }
);

module.exports = mongoose.model('Recipe', RecipeSchema);