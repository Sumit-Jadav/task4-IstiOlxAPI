const express = require('express');
const router = express.Router();
const Products = require("../models/data")
router.get('/', async(req, res)=> {
    try {
        console.log("connected");
          const products = await Products.find();
          res.json(products);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
});



module.exports = router;