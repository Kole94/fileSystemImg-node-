const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Image = new Schema({

    title: {
        type: String,
        default: false
    },
    price:   {
        type: Number,
        default: false
    }
});

var Images = mongoose.model('Image', Image);

module.exports = Images;
