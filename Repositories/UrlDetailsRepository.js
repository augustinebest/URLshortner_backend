const model = require('../Models/Urldetails');
const BaseRepository = require('./BaseRepository');

function UrlDetailsRepository() {

}

UrlDetailsRepository.prototype = BaseRepository(model);

module.exports = new UrlDetailsRepository();