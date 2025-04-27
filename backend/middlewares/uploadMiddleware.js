const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer( { storage });

const path = require('path');


module.exports = upload.single('file');