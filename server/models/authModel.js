const mongoose = require('mongoose');


const userModel = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    resetToken: {
        type: String,
    },
    resetTokenExpiration: {
        type: Date,
    }
});

const AuthModel = mongoose.model('users', userModel);
module.exports = AuthModel;