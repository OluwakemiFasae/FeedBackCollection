const mongoose = require('mongoose');
const {Schema} = mongoose; //also equal to 'const Schema = mongoose.Schema'  in es6

const userSchema = new Schema({
    googleId: String
})

mongoose.model('users', userSchema);