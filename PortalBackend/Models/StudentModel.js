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
    // required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  gardianName: {
    type: String,
  },

  gardiabcontact: {
    type: String,
    required: true,
  },
  curentAddress: {
    type: String,
    required: true,
  },
  permantAddress: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    // required: true,
  },
  selectedCourses: {
    type: String,
    //  required: true,
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
  status: {
    type: String,
    enum: ["Single", "Married", "Other"],
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
