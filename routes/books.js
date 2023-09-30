const express = require('express');
const isAuth = require('../middleware/is-auth');

const feedController = require('../controllers/books');

const router = express.Router();

router.get('/book', feedController.getBooks);

router.post('/book', isAuth, feedController.createBook);

router.put('/book/:bookId', isAuth, feedController.updateBook)

router.delete('/book/:bookId', isAuth, feedController.deleteBook);

module.exports = router;