// Creating a constructor for base repository
function BaseRepository(model) {
    if(!model) throw new Error('A model must be provided');
    this.model = model;
}

BaseRepository.prototype.add = function(data, callback) {
    this.model.create(data, callback);
}

BaseRepository.prototype.get = function(data, callback) {
    this.model.findOne({old_url: data}, callback);
}

BaseRepository.prototype.getNew = function(data, callback) {
    this.model.findOne({new_url: data}, callback);
}

BaseRepository.prototype.getCustomise = function(data, callback) {
    this.model.findOne({customise_url: data}, callback);
}

module.exports = (model) => {
    return new BaseRepository(model);
}