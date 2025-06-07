const aiService = require("../services/ai.service.js");






module.exports.getResponse = async (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }


    const response = await aiService.generateContent(prompt);
    res.status(200).send(response);
}