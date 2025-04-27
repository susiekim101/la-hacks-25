const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    name: { type: String, required: true},
    gender: { type: String, required: true},
    age: {type: Number, required: true},

    verificationCode: { type: String },
    isVerified: { type: Boolean, default: false },

    bio: { type: String, default: ""},
    arrivalTime: {type: String, default:""}

    
});

const User = mongoose.model('User', userSchema);
module.exports = User;