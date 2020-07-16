var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var daySchema = new Schema({
    date: Date,
    shifts: [{
        startTime: Number,
        endTime: Number,
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