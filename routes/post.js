const express = require('express');
const router = express.Router();
const Products = require("../models/data");

router.post("/", async (req, res) => {
    const { id, name, description, price, category, images } = req.body;
    try {
        const product = new Products({ id,name, description, price, category, images });
        const val = await product.save();
        res.status(201).json({ message: 'Product created', productId: product._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
