const express = require("express");
const product = require("../models/data");
const router = express.Router();
const app = express();
app.get("/",(req,res)=>{
    res.send("hello");
})
module.exports = router;