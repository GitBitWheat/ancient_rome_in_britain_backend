const express = require('express');
const authController = require('../controllers/files');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/images/:imageName', authController.getImage);
router.post('/images', isAuth, authController.upload, authController.processUpload);
router.delete('/images/:imageName', isAuth, authController.deleteImage);

module.exports = router;