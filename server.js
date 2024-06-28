
const express = require("express");

const app = express();
const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://jadavsumit987:sumit%40987@instiolx.fzvhifo.mongodb.net/?retryWrites=true&w=majority&appName=InstiOlx").then(() => console.log("db is connected"));

app.listen(3000, () => console.log("Server is started"));
app.use(express.json());


app.use('/', require("./routes/home"));

app.use('/', require("./routes/post"));

app.use("/", require("./routes/getbyid"));

app.use('/update', require("./routes/update"));

app.use('/del', require("./routes/delete"));