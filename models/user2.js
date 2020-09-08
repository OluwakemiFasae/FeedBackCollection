const mongoose = require('mongoose');
const {Schema} = mongoose; //also equal to 'const Schema = mongoose.Schema'  in es6

const user2Schema = new Schema({
    googleId: String
})

mongoose.model('user2', user2Schema);