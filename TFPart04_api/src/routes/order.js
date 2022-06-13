const { Router } = require("express");
const router = Router();
const {createOrder,getOrders,getOrdersByOrderId,getOrdersByState,updateStateOrder}=require('../controllers/orders.js')

router.post("/", createOrder)
router.get("/getbyorder/:orderId",getOrdersByOrderId)
router.get("/status",getOrdersByState)
router.get("/:userId", getOrders)
router.put("/", updateStateOrder)

module.exports = router;