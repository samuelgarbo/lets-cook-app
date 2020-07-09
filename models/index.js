const mongoose = require('mongoose');
const config = require('config');
mongoose.set('debug', true);

const CONNECTION = process.env.MONGODB_URI || config.get('mongoURI');
mongoose.connect(CONNECTION, {
    userNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true})
    .then(() => console.log('Databse connected'))
    .catch(err => console.log(err))

module.exports.Recipe = require('./recipe')
module.exports.User = require('./user')


