const express = require('express');
const router = express.Router();
const Products = require("../models/data");

router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  console.log("sucess");
  const { id } = req.params;
  try {
    const product = await Products.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;