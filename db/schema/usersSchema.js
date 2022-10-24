//Dependecies
const mongoose = require ('mongoose');

//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema ( {
    phoneNumber: {
        type: String,
        required: true,
        maxLength: 12,
        minLength: 12,
        unique: true,
    },
    firstName: {
        type: String,
        required:true,
        maxLength: 16,
        minLength: 3
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 16,
        minLength: 3
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
    }
})