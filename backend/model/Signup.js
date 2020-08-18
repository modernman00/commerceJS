const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Signup = mongoose.model('Signup', SignupSchema);
module.exports = Signup;