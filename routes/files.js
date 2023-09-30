const express = require('express');
const authController = require('../controllers/files');
const router = express.Router();

router.post('/images', authController.upload, authController.processUpload);
router.get('/images/:imageName', authController.getImage);
router.delete('/images/:imageName', authController.deleteImage);

module.exports = router;