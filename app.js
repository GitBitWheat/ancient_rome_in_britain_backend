const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/books');
const audioRoutes = require('./routes/audio');
const recreationalRoutes = require('./routes/recreational');
const websiteRoutes = require('./routes/website');
const authRoutes = require('./routes/auth');
const filesRoutes = require('./routes/files');
const listsRoutes = require('./routes/lists');

const mongoose= require('mongoose');
const app = express();

app.use(bodyParser.json()); // application/json

app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.use('/feed', audioRoutes);
app.use('/feed', recreationalRoutes);
app.use('/feed', websiteRoutes);
app.use('/auth', authRoutes);
app.use('/files', filesRoutes);
app.use('/lists', listsRoutes);

mongoose.connect(
    'mongodb+srv://ilaydaniel04:E2K7VjlWMtsQ0LjS@cluster0.rx2hm98.mongodb.net/?retryWrites=true&w=majority'
).then(client =>{
    console.log('database connected');
    app.listen(8080);
})
.catch(err =>{
    console.log(err);
});