const User = require("../models/user");

// Register controller
const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne( {username} );
        if(existingUser) return res.status(400).json({ error: "Username already exists "});

        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
};

// Login controller
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({username});
        if(!user) return res.status(400).json({error:"User not found"});

        if(user.password !== password) {
            return res.status(400).json({error:"Incorret password"});
        }

        res.status(200).json({message: "Login successful"});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server error"});
    }
};

module.exports = {register, login};