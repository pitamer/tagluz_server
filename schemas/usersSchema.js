var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: {type: String, unique: true},
    isAdmin: {type: Boolean, default: false},
    maxHours: {type: Number, default: 250}
});

var User = mongoose.model('User', usersSchema);

module.exports = User