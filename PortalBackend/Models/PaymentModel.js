const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  AHolderName: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    enum: ["NetBanking", "UPI", "Cash", "Other"],
    required: true,
  },
  upiId: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  paymentDoneIn: {
    type: String,
    enum: ["Full Payment", "Installment"],
    required: true,
  },
  ammoundPaid: {
    type: String,
    required: true,
  },
  remainingAmmount: {
    type: String,
    required: true,
  },
  TransactionDate: {
    type: String,
    required: true,
  },
  nestInstallmentDate: {
    type: String,
    required: true,
  },
});

const PaymentModel = mongoose.model("Payments", paymentSchema);

module.exports = PaymentModel;
