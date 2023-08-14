// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const app = express();
// app.use(cors());
// const PORT = 3000;
//
// app.use(express.json());
// app.use(express.static('public'));
//
// // app.post('/ask-openai', async (req, res) => {
// //     const userMessage = req.body.message;
// //     console.log("Sending prompt to OpenAI:", userMessage);
//
// //     try {
// //         const openaiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
// //             model: 'gpt-3.5-turbo',
// //             messages: [
// //                 {role: "system", content: "You are a helpful Brazilian poet assistant."},
// //                 {role: "user", content: userMessage}
// //             ]
// //         }, {
// //             headers: {
// //                 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
// //                 'Content-Type': 'application/json'
// //             }
// //         });
// //
// //         const chatGPTResponse = openaiResponse.data.choices[0].message.content.trim();
// //         console.log("Received response from OpenAI:", chatGPTResponse);
// //         res.json({ message: chatGPTResponse });
// //
// //     } catch (error) {
// //         console.error("Error fetching response from OpenAI:", error.response ? error.response.data : error.message);
// //         res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
// //     }
// // });
//
//
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
