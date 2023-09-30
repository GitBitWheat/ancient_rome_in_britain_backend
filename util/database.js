const {MongoClient} = require("mongodb");

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://ilaydaniel04:E2K7VjlWMtsQ0LjS@cluster0.rx2hm98.mongodb.net/?retryWrites=true&w=majority'
    ).then(client =>{
        console.log('database connected');
        callback(client);
    })
    .catch(err =>{
        console.log(err);
    });
};

module.exports = mongoConnect;