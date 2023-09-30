const express = require('express');
const isAuth = require('../middleware/is-auth');

const feedController = require('../controllers/recreational');

const router = express.Router();

router.get('/recreational', feedController.getRecreational);

router.post('/recreational', isAuth, feedController.createRecreational);

router.put('/recreational/:id', isAuth, feedController.updateRecreational)

router.delete('/recreational/:id', isAuth, feedController.deleteRecreational);

module.exports = router;