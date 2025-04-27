const express = require('express');
const {register, login, verifyUserCode} = require('../controllers/authController');

const router = express.Router();

// Route to register
router.post('/register', register);

// Route to login
router.post('/login', login);

// Route to verification code
router.post('/verification', verifyUserCode);


module.exports = router;