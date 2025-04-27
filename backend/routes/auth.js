const express = require('express');
const {register, login, verifyUserCode} = require('../controllers/authController');

const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { extractArrivalTime } = require('../controllers/uploadController');

// Route to register
router.post('/register', register);

// Route to login
router.post('/login', login);

// Route to verification code
router.post('/verification', verifyUserCode);

// Route to Gemini API
router.post('/pdf', upload, extractArrivalTime);

const { extractArrivalTime } = require('../controllers/uploadController');
router.post('/get-arrival-time', getArrivalTime);

module.exports = router;