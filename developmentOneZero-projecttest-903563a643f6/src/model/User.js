const {Schema, Model, model } = require('mongoose');

const UserSchema = new Schema({
    nome:{
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true
    }, 
    idade: {
        type: Number,
        required: true
    }
});


module.exports = model('User', UserSchema);