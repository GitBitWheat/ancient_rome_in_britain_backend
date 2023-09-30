const express = require('express');
const isAuth = require('../middleware/is-auth');

const feedController = require('../controllers/audio');

const router = express.Router();

router.get('/audiovisual', feedController.getAudios);

router.post('/audiovisual', isAuth, feedController.createAudio);

router.put('/audiovisual/:id', isAuth, feedController.updateAudio)

router.delete('/audiovisual/:id', isAuth, feedController.deleteAudio);

module.exports = router;