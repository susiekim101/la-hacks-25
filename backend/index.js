require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.use(express.json());

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
            console.log('Server running on https://localhost:${PORT}');
        });

    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

startServer();