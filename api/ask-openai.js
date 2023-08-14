
// api/ask-openai.js
const axios = require('axios');

module.exports = async (req, res) => {
    const userMessage = req.body.message;
    console.log("Sending prompt to OpenAI:", userMessage);

    try {
        const openaiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
            messages: [
                {role: "system", content: "You are a helpful Brazilian poet assistant."},
                {role: "user", content: userMessage}
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const chatGPTResponse = openaiResponse.data.choices[0].message.content.trim();
        console.log("Received response from OpenAI:", chatGPTResponse);
        res.json({ message: chatGPTResponse });

    } catch (error) {
        console.error("Error fetching response from OpenAI:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
    }
};
