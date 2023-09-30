const path = require('path');
const multer = require('multer');
const uuid = require('uuid');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'images';
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Generate a unique filename using UUID
        const fileExtension = path.extname(file.originalname);
        const uniqueId = uuid.v4();
        const uniqueFileName = `${uniqueId}${fileExtension}`;
        cb(null, uniqueFileName);
    },
});

const fileFilter = (req, file , cb) =>{
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

// 'image' should match the name attribute of the file input field
const upload = multer({ storage: storage, fileFilter: fileFilter });
exports.upload = upload.single('image');

exports.processUpload = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file provided' });
    }

    const file = req.file;
    const { filename } = file;

    return res.status(201).json({ message: 'File uploaded successfully', filename: filename });
};

exports.getImage = (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, '..', 'images', imageName);

    // Set the appropriate content type for the image (e.g., 'image/jpeg' or 'image/png').
    res.contentType(`image/${path.extname(imageName)}`);

    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).send('Image not found');
        }
    });
};

exports.deleteImage = (req, res, next) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, '..', 'images', imageName);
    fs.unlink(imagePath, err => {
        console.error('Could not delete image:', err);
        next(err);
    });
    res.status(200).json({messageGroup: 'File was deleted'});
};