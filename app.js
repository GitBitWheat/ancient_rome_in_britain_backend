const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedRoutes = require('./routes/books');
const audioRoutes = require('./routes/audio');
const recreationalRoutes = require('./routes/recreational');
const websiteRoutes = require('./routes/website');
const authRoutes = require('./routes/auth');
const filesRoutes = require('./routes/files');
const listsRoutes = require('./routes/lists');

const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json()); // application/json

const allowedOrigins = ['https://ancientromeinbritain.com'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use('/feed', feedRoutes);
app.use('/feed', audioRoutes);
app.use('/feed', recreationalRoutes);
app.use('/feed', websiteRoutes);
app.use('/auth', authRoutes);
app.use('/files', filesRoutes);
app.use('/lists', listsRoutes);

mongoose.connect(
    'mongodb://db/test'
).then(_client =>{
    console.log('database connected');
    app.listen(8080);
})
.catch(err =>{
    console.log(err);
});