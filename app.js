const express = require("express");
const connectDB = require('./configDB');
const file = require("./routes/file");
const app = express();

connectDB();

app.use('/files', file);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("SHOW THE HOME PAGE");
});

app.listen(PORT, () => console.log(`server is runnign on http://localhost:${PORT}`));