const mongoose = require('mongoose');
const config = require("../config/default");
mongoose.set('debug', true);

const CONNECTION = config.mongoURI;

mongoose.connect(CONNECTION, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true})
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

module.exports.Comment = require('./comment')
module.exports.User = require('./user')


