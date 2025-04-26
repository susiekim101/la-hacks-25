const express = require('express');
const {register, login} = require('../controllers/authController');

const router = express.Router();

// Route to register
router.post('/register', register);

// Route to login
router.post('/login', login);

module.exports = router;