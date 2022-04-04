const config = require('../utils/config')

const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})


mongoose.connect(config.MONGODB_URI)

module.exports = mongoose.model('Blog', blogSchema)