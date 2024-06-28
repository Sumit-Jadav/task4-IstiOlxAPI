const express = require("express");
const Products = require("../models/data");
const router = express.Router();

router.get("/:id",async (req,res,next) =>{
  

  console.log(req.params.id);
  console.log("sucess");
  Products.findById(req.params.id)
  .then(result=>{
    res.status(200).json({
      products:result
    })
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({
      error:err
    })
  })
})
 



module.exports = router;

