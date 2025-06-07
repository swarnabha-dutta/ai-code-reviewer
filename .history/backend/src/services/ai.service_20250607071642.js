const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateContent(prompt) {
    const result = await model.generateContent({
        contents: [
            {
                parts: [{ text: prompt }],
                role: "user",
            },
        ],
    });

    return result.response.text();
}

module.exports = generateContent;
