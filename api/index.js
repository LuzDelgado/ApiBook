/* INDEX DE API */
var express = require('express');
var router = express.Router();


//middlewares
const audlog = require('./middlewares/audlog');
//const authent = require('./middlewares/authent');

//controllers
const users = require('./controllers/users');
const books = require('./controllers/books');

//
router.use(audlog);
//router.use(authent);

//services
router.use('/users', users);
router.use('/books', books);

module.exports = router;