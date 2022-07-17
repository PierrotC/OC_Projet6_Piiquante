const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        const name = file.originalname.split(' ').join('_');
        const ext = MIME_TYPES[file.mimetype];
        
        if(!ext) {
            cb(null, false);
        } else {
            cb(null, name + Date.now() + '.' + ext);
        };
    }
});

module.exports = multer({ storage: storage }).single('image');