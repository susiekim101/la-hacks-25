require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//Connect to MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB Atlas connected"))
    .catch(err => console.log("MongoDB connection error: ", err));

// Routes
app.use('/api/auth/, authRoutes');

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const User = require('./models/user');

/*
    async function startServer() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('userDatabase');
        const userCollection = db.collection('users');

        app.post('/api/users', async(req, res) => {
            const { name, email } = req.body; // frontend should send JSON object
            try {
            const newUser = { name, email, verified: false };
            const result = await userCollection.insertOne(newUser);
            res.status(201).send({ id: result.insertedId });
            } catch (err) {
                console.error(err);
                res.status(500).send('Error inserting user');
            }
        });

        app.listen(PORT, () => {
            console.log(`Server running on https://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}
*/
startServer();