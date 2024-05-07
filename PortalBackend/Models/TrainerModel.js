const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
});

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
