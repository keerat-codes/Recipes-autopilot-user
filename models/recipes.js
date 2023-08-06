const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
recipeName : { type:  String, description: "Required Field", required: true },
recipeInstructions : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('recipes', recipesSchema);