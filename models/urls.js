const mongoose = require('mongoose');

const urlsSchema = mongoose.Schema({
	URL: String,
	suffix: String,
	dateCreated: Date,
    nbClicks: Number,	
});

const Url = mongoose.model('urls', urlsSchema);

module.exports = Url;