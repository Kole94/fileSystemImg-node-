const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Image = new Schema({

    title: {
        type: String,
        default: false
    },
    price:   {
        type: Integer,
        default: false
    }
});

Image.plugin(passportLocalMongoose);
var Images = mongoose.model('User', Image);

module.exports = Images;
