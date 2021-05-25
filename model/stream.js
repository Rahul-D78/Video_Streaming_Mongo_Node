const mongoose = require('mongoose');

const streamSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    length:{
        type: Number,
        required: false
    },
    sender: {
        type: String,
        required: false
    },
}, {timestamps: true});

module.exports = mongoose.model('Stream', streamSchema);