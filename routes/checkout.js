var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const mongoose = require('mongoose');

var Check = require('../models/Checkout')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('NEW');
});
router.post('/', (req, res, next) => {
    Check.create(req.body)
    .then((dish) => {
        console.log('Dish Created ', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = router;
