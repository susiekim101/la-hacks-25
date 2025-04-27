const User = require("../models/user");
const nodeMailer = require('nodemailer');

// Creates connection between backend server and emailing service
const transporter = nodeMailer.createTransport( {
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

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

        // Generate verification code
        const verificationCode = Math.floor(10000 + Math.random() * 900000).toString();
        
        const newUser = new User({ email, password, name, gender, age, verificationCode });
        // Push information to db
        await newUser.save();

        // Object to store information to send mail
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Verify your email",
            text: `Your verification code is: ${verificationCode}`
        };

        // Send mail
        await transporter.sendMail(mailOptions);
        res.status(201).json({ message: "User registered successfully"});

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
};

// Login controller
const login = async (req, res) => {
    // Save req to email and password
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

const verifyUserCode = async(req, res) => {
    const { email, code } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({error: "User not found"});

        if(user.verificationCode === code) {
            // Verified, reset verification code
            user.isVerified = true;
            user.verificationCode = undefined;
            // Save information into db
            await user.save();
            return res.status(200).json({message: "Email verified successfully!"});
        } else{
            return res.status(400).json({error:"Invalid verification code"});
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Server error"})
    }
};
module.exports = {register, login, verifyUserCode};