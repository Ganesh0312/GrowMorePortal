const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  trainerName: {
    type: String,
    required: true,
  },
});

courseSchema.plugin(AutoIncrement, {
  inc_field: "courseCode",
  start_seq: 1000,
});

module.exports = mongoose.model("Course", courseSchema);
