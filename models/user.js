const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true},
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe'}]
})

const User = mongoose.model('User', userSchema);
module.exports = User;