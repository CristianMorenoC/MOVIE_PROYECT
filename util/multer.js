const multer = require('multer');

const { AppError } = require('./appError');

const storage = multer.memoryStorage();

const multerFileFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith('image')) {
        cb(new AppError(400, 'The file is not an image', false));
    }else {
        cb(null, true)
    }
};

const upload =multer({
    storage,
    fileFilter: multerFileFilter
});

module.exports = { upload };