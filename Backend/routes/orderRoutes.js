const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router
  .route("/")
  .get(orderController.getAll)
  .post(orderController.createOrder);

router.route("/:id").patch(orderController.updateOrder);

router.route("cancel/:id", orderController.cancelOrder);

module.exports = router;
