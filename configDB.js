require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
    mongoose.connect('mongodb://localhost:27017/stream', {useUnifiedTopology: true, useNewUrlParser: true});
    const connect = mongoose.connection
    connect.on("open", () => {
        console.log("database connected");
    }).catch((e) => {
        console.log(e);
    });
}
module.exports = connectDB;