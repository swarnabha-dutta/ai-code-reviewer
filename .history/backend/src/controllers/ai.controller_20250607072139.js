const aiService = require("../services/ai.service.js");

module.exports.getReview = async (req, res) => {
    const prompt = req.body.prompt;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await aiService(prompt);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
