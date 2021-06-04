const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Date:{
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Posts', postSchema)