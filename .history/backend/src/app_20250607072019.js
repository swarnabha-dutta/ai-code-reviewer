const express = require('express');
const aiRoutes = require("./routes/ai.routes.js");
const app = express();


app.get("/", (req, res) => {
    res.send("Hello World!");
})



app.use(express.json());
app.use("/ai", aiRoutes);


module.exports = app;