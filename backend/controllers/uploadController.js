const axios = require('axios');
const User = require('../models/user');
const pdfParse = require('pdf-parse');
const { GoogleGenAI } = require("@google/genai");

// npm install pdf-prase
// npm install axios

const extractArrivalTime = async (req, res) => {
    try {
        console.log("File received?", req.file);
        const fileBuffer = req.file.buffer; // uploaded PDF in memory
        const email = req.body.email;

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});
        
        // Convert the PDF buffer into base64
        const base64Pdf = fileBuffer.toString('base64');

        const contents = [
            { text:`
                You are given a PDF document of a flight itinerary.
                Extract only the **local arrival time** of the flight.
                Only return the local arrival time in 24-hour format (e.g., 18:45).
                If no time is found, reply "No arrival time found."
            `},
            {
                inlineData: {
                    mimeType: 'application/pdf',
                    data: base64Pdf
                }
            }
        ];
        // Send to Gemini
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: contents
        });

        const generatedText = response.candidates[0].content.parts[0].text.trim();
        console.log("Arrival Time extracted:", generatedText);

        await User.updateOne(
            { email }, 
            { $set: { arrivalTime: generatedText } }
          );
          
        res.status(200).json({message: "Arrival time extracted", arrivalTime: generatedText});
    
    } catch (error) {
        console.error("Error extracting arrival time:", error);
        res.status(500).json({message: "Server error extracting arrival time"});
    }
};

module.exports = { extractArrivalTime };