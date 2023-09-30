const fs = require('fs');
const path = require('path');

const Book = require('../models/book');

const deleteImage = imageName => {
    const imagePath = path.join(__dirname, '..', 'images', imageName);
    fs.unlink(imagePath, err => {
        console.error('Could not delete image:', err);
    });
};

exports.getBooks = (req, res, next) => {
    Book.find()
        .then(books => {
            res
                .status(200)
                .json({ messageGroup: 'Fetched books successfully.', books: books });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.createBook = (req, res, next) => {
    const name = req.body.name;
    const ageGroup = req.body.ageGroup;
    const year = req.body.year;
    const author = req.body.author;
    const publisher = req.body.publisher;
    const genre = req.body.genre;
    const pic = req.body.pic;
    const summary = req.body.summary;
    const tags = req.body.tags;

    const book = new Book({
        name: name,
        ageGroup: ageGroup,
        year:year,
        author: author,
        publisher: publisher,
        genre: genre,
        pic: pic,
        summary: summary,
        tags: tags,
    })
    book.save()
        .then(result => {
            console.log('Insert new book: ', result);
            res.status(201).json({
                messageGroup: 'Book created successfully!',
                book: result
            });
        })
        .catch(err => {
            console.log('insert bool into DB error: ', err);
        });
};

exports.updateBook = (req, res, next) => {
    const bookId = req.params.bookId;
    const name = req.body.name;
    const ageGroup = req.body.ageGroup;
    const year = req.body.year;
    const author = req.body.author;
    const publisher = req.body.publisher;
    const genre = req.body.genre;
    const pic = req.body.pic;
    const summary = req.body.summary;
    const tags = req.body.tags;
    console.log('got update request of: bookId', bookId, 'name: ', req.body);
    Book.findById(bookId)
        .then(book =>{
            if(!book){
                const error = new Error('Could not find book');
                error.statusCode = 404;
                throw error;
            }
            // Delete the previous cover image if it changed
            // Proceed even if an error occured and the image was not deleted
            if (pic !== book.pic) {
                deleteImage(book.pic);
            }
            book.name = name;
            book.ageGroup = ageGroup;
            book.year = year;
            book.author = author;
            book.publisher = publisher;
            book.genre = genre;
            book.pic = pic;
            book.summary = summary;
            book.tags = tags;
            return book.save()
        })
        .then(result =>{
            console.log(result);
            res.status(200).json({messageGroup:'Book was updated'});
        })
        .catch(err =>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}


exports.deleteBook = (req, res, next) => {
    const bookId = req.params.bookId;
    Book.findById(bookId)
        .then(book =>{
            if(!book){
                const error = new Error('Could not find book');
                error.statusCode = 404;
                throw error;
            }
            // If the book as a cover image, then delete the file as well
            // Proceed even if an error occured and the image was not deleted
            if (book.pic) {
                deleteImage(book.pic);
            }
            return Book.findByIdAndDelete(bookId);

        })
        .then(result =>{
            console.log(result);
            res.status(200).json({messageGroup:'Book was deleted'});
        })
        .catch(err =>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
};