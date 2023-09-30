const getListItems = model => (req, res, next) => {
    model.find().sort({ value: 1 })
    .then(list => {
        res
            .status(200)
            .json({ message: 'Fetched list successfully.', list: list });
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};

const createListItem = model => (req, res, next) => {
    const value = req.body.value;
    const item = new model({
        value: value,
    });
    item.save()
    .then(result => {
        console.log('Insert new list item: ', result);
        res.status(201).json({
            message: 'List item created successfully!',
            item: result
        });
    })
    .catch(err => {
        console.log('insert bool into DB error: ', err);
    });
};

const updateListItem = model => (req, res, next) => {
    const id = req.params.id;
    const value = req.body.value;
    console.log('got update request of: list item id', id, 'name: ', req.body);
    model.findById(id)
    .then(item =>{
        if(!item){
            const error = new Error('Could not find audio');
            error.statusCode = 404;
            throw error;
        }
        item.value = value;
        return item.save()
    })
    .then(result =>{
        console.log(result);
        res.status(200).json({message:'Audio was updated'});
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    });
}

const deleteListItem = model => (req, res, next) => {
    const id = req.params.id;
    model.findById(id)
    .then(item =>{
        if(!item){
            const error = new Error('Could not find audio');
            error.statusCode = 404;
            throw error;
        }
        return model.findByIdAndDelete(id);

    })
    .then(result =>{
        console.log(result);
        res.status(200).json({message:'Audio was deleted'});
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    });
};

const ListsModels = require('../models/lists');

const Tag = ListsModels.tag;
const AgeGroup = ListsModels.ageGroup;
const Genre = ListsModels.genre;
const WebsiteType = ListsModels.websiteType;
const AudiovisualType = ListsModels.audiovisualType;
const RecreationalType = ListsModels.recreationalType;

exports.getTags = getListItems(Tag);
exports.createTag = createListItem(Tag);
exports.updateTag = updateListItem(Tag);
exports.deleteTag = deleteListItem(Tag);

exports.getAgeGroups = getListItems(AgeGroup);
exports.createAgeGroup = createListItem(AgeGroup);
exports.updateAgeGroup = updateListItem(AgeGroup);
exports.deleteAgeGroup = deleteListItem(AgeGroup);

exports.getGenres = getListItems(Genre);
exports.createGenre = createListItem(Genre);
exports.updateGenre = updateListItem(Genre);
exports.deleteGenre = deleteListItem(Genre);

exports.getWebsiteTypes = getListItems(WebsiteType);
exports.createWebsiteType = createListItem(WebsiteType);
exports.updateWebsiteType = updateListItem(WebsiteType);
exports.deleteWebsiteType = deleteListItem(WebsiteType);

exports.getAudiovisualTypes = getListItems(AudiovisualType);
exports.createAudiovisualType = createListItem(AudiovisualType);
exports.updateAudiovisualType = updateListItem(AudiovisualType);
exports.deleteAudiovisualType = deleteListItem(AudiovisualType);

exports.getRecreationalTypes = getListItems(RecreationalType);
exports.createRecreationalType = createListItem(RecreationalType);
exports.updateRecreationalType = updateListItem(RecreationalType);
exports.deleteRecreationalType = deleteListItem(RecreationalType);