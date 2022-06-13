const { Router } = require("express");
const router = Router();
const {getProduct,getProdByCategory,createProduct,updateProduct,deleteProduct}=require('../controllers/products.js');
const { createReview } = require('../controllers/controllers')

router.get("/:idProduct", getProduct)
router.get('/category/:category',getProdByCategory)
router.post("/", createProduct)
router.put("/update/:idProduct", updateProduct)
router.delete('/delete/:idProduct', deleteProduct)
//para hacer post de reviews se debe colocar localhost:3001/product/review
router.post("/review", createReview)

module.exports = router;

//--------------------------------------------------------------------------------------







