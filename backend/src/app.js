const express = require('express');
const aiRoutes = require("./routes/ai.routes.js");
const cors = require("cors");
const app = express();


app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://ai-code-reviewer-backend-xmkw.onrender.com'
    ],
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})



app.use("/ai", aiRoutes);


module.exports = app;