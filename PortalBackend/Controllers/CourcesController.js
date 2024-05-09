// controllers/courseController.js
const Course = require("../Models/CourseModel");
const Trainer = require("../Models/TrainerModel");

// Create new course
exports.createCourse = async (req, res) => {
  try {
    const { trainerName, ...courseData } = req.body;
    const trainer = await Trainer.findOne({ trainerName });
    if (!trainer) {
      return res
        .status(400)
        .json({ success: false, message: "Trainer not found" });
    }
    courseData.trainerName = trainerName;
    courseData.trainer = trainer._id;
    const course = new Course(courseData);
    await course.save();
    res.status(201).json({
      success: true,
      data: course,
      message: "Cource added successfully",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("trainerName");
    res.json({ success: true, data: courses });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("trainerName");
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.json({ success: true, data: course });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  try {
    const { trainerName, ...courseData } = req.body;
    const trainer = await Trainer.findOne({ trainerName });
    if (!trainer) {
      return res
        .status(400)
        .json({ success: false, message: "Trainer not found" });
    }
    courseData.trainerName = trainerName;
    courseData.trainer = trainer._id;
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      courseData,
      {
        new: true,
        runValidators: true,
      }
    ).populate("trainer");
    if (!updatedCourse) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.json({ success: true, data: updatedCourse });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.json({ success: true, message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
