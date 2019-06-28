const mongoose = require('mongoose');

const UrlDetails = mongoose.Schema({
   old_url: { type: String },
   new_url: { type: String },
   customise_url: { type: String } 
}) 

module.exports = mongoose.model('UrlDetail', UrlDetails);