const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Check = new Schema({
    admin:   {
        type: String,
        default: false
    }
});

var Checks = mongoose.model('Check', Check);

module.exports = Checks;
