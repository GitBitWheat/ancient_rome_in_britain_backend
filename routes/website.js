const express = require('express');
const isAuth = require('../middleware/is-auth');

const feedController = require('../controllers/website');

const router = express.Router();

router.get('/website', feedController.getWebsites);

router.post('/website', isAuth, feedController.createWebsite);

router.put('/website/:id', isAuth, feedController.updateWebsite)

router.delete('/website/:id', isAuth, feedController.deleteWebsite);

module.exports = router;