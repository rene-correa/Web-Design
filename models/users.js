const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    requirements: {
        type: Array,
        status: String
    },

}, { timestamps: true });

const user = mongoose.model('user', userSchema);
module.exports = user;