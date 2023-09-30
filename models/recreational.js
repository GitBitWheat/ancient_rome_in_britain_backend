const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recreationalSchema = new Schema({
        name:{
            type: String,
            required: true
        },
        ageGroup:{
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        tags: {
            type: [String],
            required: false,
        },
        summary:{
            type: String,
            required: false
        },
        type:{
            type: String,
            required: true
        }
    },
    {timestamps:true})

module.exports=mongoose.model('Recreational', recreationalSchema);