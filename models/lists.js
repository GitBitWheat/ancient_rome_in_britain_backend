const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
        value: {
            type: String,
            required: true
        }
    }, {timestamps:true}
);
const ageGroupSchema = new Schema({
        value: {
            type: String,
            required: true
        }
    }, {timestamps:true}
);
const genreSchema = new Schema({
        value: {
            type: String,
            required: true
        }
    }, {timestamps:true}
);
const websiteTypeSchema = new Schema({
        value: {
            type: String,
            required: true
        }
    }, {timestamps:true}
);
const audiovisualTypeSchema = new Schema({
        value: {
            type: String,
            required: true
        }
    }, {timestamps:true}
);
const recreationalTypeSchema = new Schema({
        value: {
            type: String,
            required: true
        }
    }, {timestamps:true}
);

exports.tag = mongoose.model('Tags', tagSchema);
exports.ageGroup = mongoose.model('AgeGroups', ageGroupSchema);
exports.genre = mongoose.model('Genres', genreSchema);
exports.websiteType = mongoose.model('WebsiteTypes', websiteTypeSchema);
exports.audiovisualType = mongoose.model('audiovisualTypes', audiovisualTypeSchema);
exports.recreationalType = mongoose.model('recreationalTypes', recreationalTypeSchema);