const mongoose = require('mongoose');

// create a schema 1
const Schema = mongoose.Schema;
// 2
const SignupSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    role: {
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true,
    }
);
// buils the model
const Signup = mongoose.model('Signup', SignupSchema);
module.exports = Signup;