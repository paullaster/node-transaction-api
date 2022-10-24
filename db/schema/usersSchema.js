//Dependecies
const mongoose = require ('mongoose');

//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema ( {
    phoneNumber: {
        type: String,
        required: true,
        maxLength: 13,
        minLength: 13,
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
        maxLength: 2024
    },
    dateJoined:{
        type: Date,
        default: Date.now
    }
});

// Export user schema
module.exports = UserSchema;