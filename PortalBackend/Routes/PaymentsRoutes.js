const express = require("express");
const router = express.Router();

const Payments = require("../Controllers/PaymentController");

router.get("/get", Payments.getPayment);
router.post("/add", Payments.addPayments);

module.exports = router;
