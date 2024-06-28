const express = require("express");
const Products = require("../models/data");
const router = express.Router();
router.patch("/:id",async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, images } = req.body;
    try {
      const product = await Products.findByIdAndUpdate(id, { name, description, price, category, images }, { new: true });
      res.status(200).json({ message: 'Product updated', product: product }); // Corrected response object
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  module.exports = router;