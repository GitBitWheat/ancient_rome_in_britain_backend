const express = require('express');
const isAuth = require('../middleware/is-auth');

const listsController = require('../controllers/lists');

const router = express.Router();

// Tags
router.get('/tag', listsController.getTags);
router.post('/tag', isAuth, listsController.createTag);
router.put('/tag/:id', isAuth, listsController.updateTag)
router.delete('/tag/:id', isAuth, listsController.deleteTag);

// AgeGroups
router.get('/agegroup', listsController.getAgeGroups);
router.post('/agegroup', isAuth, listsController.createAgeGroup);
router.put('/agegroup/:id', isAuth, listsController.updateAgeGroup)
router.delete('/agegroup/:id', isAuth, listsController.deleteAgeGroup);

// Genres
router.get('/genre', listsController.getGenres);
router.post('/genre', isAuth, listsController.createGenre);
router.put('/genre/:id', isAuth, listsController.updateGenre)
router.delete('/genre/:id', isAuth, listsController.deleteGenre);

// WebsiteTypes
router.get('/websitetype', listsController.getWebsiteTypes);
router.post('/websitetype', isAuth, listsController.createWebsiteType);
router.put('/websitetype/:id', isAuth, listsController.updateWebsiteType)
router.delete('/websitetype/:id', isAuth, listsController.deleteWebsiteType);

// AudiovisualTypes
router.get('/audiovisualtype', listsController.getAudiovisualTypes);
router.post('/audiovisualtype', isAuth, listsController.createAudiovisualType);
router.put('/audiovisualtype/:id', isAuth, listsController.updateAudiovisualType)
router.delete('/audiovisualtype/:id', isAuth, listsController.deleteAudiovisualType);

// RecreationalTypes
router.get('/recreationaltype', listsController.getRecreationalTypes);
router.post('/recreationaltype', isAuth, listsController.createRecreationalType);
router.put('/recreationaltype/:id', isAuth, listsController.updateRecreationalType)
router.delete('/recreationaltype/:id', isAuth, listsController.deleteRecreationalType);

module.exports = router;