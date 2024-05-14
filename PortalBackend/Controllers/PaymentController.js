const Payment = require("../Models/PaymentModel");

exports.getPayment = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({ data: payments });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addPayments = async (req, res) => {
  try {
    const payments = Payment(req.body);
    await payments.save();
    res.status(201).json({ message: "Payment added succesfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
