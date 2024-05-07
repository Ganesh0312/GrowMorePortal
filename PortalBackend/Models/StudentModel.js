const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const studentSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    unique: true,
  },
  studentName: {
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
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  degreeResult: {
    type: Number,
    required: true,
  },
  xthResult: Number,
  xiithResult: Number,
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

studentSchema.plugin(AutoIncrement, { inc_field: "studentId", start_seq: 100 });

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
