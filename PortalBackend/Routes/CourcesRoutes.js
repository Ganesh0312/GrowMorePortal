const express = require("express");
const router = express.Router();
const courseController = require("../Controllers/CourcesController");

router.post("/add-courses", courseController.createCourse);
router.get("/get-courses", courseController.getAllCourses);
router.get("/courses/:id", courseController.getCourseById);
router.put("/update-courses/:id", courseController.updateCourse);
router.delete("/delete-courses/:id", courseController.deleteCourse);

module.exports = router;
