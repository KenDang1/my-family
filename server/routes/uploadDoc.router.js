const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();
const multer  = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/documents/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine });

router.post('/:memberId', upload.single('image'), (req, res, next) => {
    console.log('req.body is', req.body);
    console.log('req.file is', req.file);
    
    res.send('file upload success')
});

module.exports = router;