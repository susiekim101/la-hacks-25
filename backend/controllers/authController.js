const User = require("../models/user");

// Register controller
const register = async (req, res) => {
    const { email, password, name, gender, age } = req.body;
    try {
        const existingUser = await User.findOne( {email} );
        if(existingUser) {
            return res.status(400).json({ error: "Email already exists "});
        } 
        if(!email.endsWith('.edu')) {
            return res.status(400).json({ error: "Not a valid email address"});
        }

        const newUser = new User({ email, password, name, gender, age });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
};

// Login controller
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error:"User not found"});

        if(user.password !== password) {
            return res.status(400).json({error:"Incorrect password"});
        }

        res.status(200).json({message: "Login successful"});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server error"});
    }
};

module.exports = {register, login};