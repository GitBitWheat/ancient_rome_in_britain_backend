const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        ageGroup: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        author:{
            type: String,
            required: true
        } ,
        publisher:{
            type: String,
            required: true
        },
        genre:{
            type: String,
            required: true
        },
        pic:{
            type: String,
            required: false
        },
        summary:{
            type: String,
            required: false
        },
        tags: {
            type: [String], // This defines an array of strings for the 'tags' field.
            required: false, // It's optional, you can set it to true if tags are required.
        },

    },
    {timestamps:true})

module.exports=mongoose.model('Book', bookSchema);