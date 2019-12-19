var express = require('express');
var multer  = require('multer');
var Image = require('../models/Image');
const bodyParser = require('body-parser');


var router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFileFilter});

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());
router.get('/', (req, res, next) => {
    res.send('aaaaaaaaaaaaaaaaaaaaaaa');
})

router.get('/:Id', (req, res, next) => {
    res.sendFile(`${req.params.Id}.jpg`, { root: '/home/kole/node/auth/public/images/' });
});

router.post('/', (req, res, next) => {
   console.log(req.header);

    Image.create(req.body)
    .then((img) => {
        console.log('Dish Created ', img);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(img);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = router;

