const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    shortUrl:String,
    originalUrl:String
})

const Urls = mongoose.model("Urls",UrlSchema)

module.exports = Urls