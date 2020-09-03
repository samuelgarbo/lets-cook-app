const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    recipe: {
        type: String, 
        required: true
    },
    comment: {
        type: String, 
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    user: { type: Schema.Types.ObjectId, ref: 'User'}

})

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;