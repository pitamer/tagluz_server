var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var daySchema = new Schema({
    date: Date,
    shifts: [{
        startTime: Date,
        endTime: Date,
        isAllDay: Boolean,
        user: String,
    }],
    messages: [{
        user: String,
        content: String
    }],
    alerts: [String]
});

var Day = mongoose.model('Day', daySchema);

module.exports = Day