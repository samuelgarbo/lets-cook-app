const mongoose = require('mongoooose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    cookingTime: {
        type: Number, 
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    ingredients: [
       {
           quantity: {type: String, required: true},
           ingredient: {type: String, required: true}
        }
    ],
    method: [
        { type: String, required: true}
    ],
    created_date: {
        type: Date,
        default: Date.now
    },
    user: { type: Schema.Types.ObjectId, ref: 'User'}

})

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;