const express = require("express");
const router = express.Router();
const studentController = require("../Controllers/StudentController");

router.post("/add-students", studentController.createStudent);
router.get("/get-students", studentController.getAllStudents);
router.put("/update-students/:id", studentController.updateStudent);
router.delete("/delete-students/:id", studentController.deleteStudent);

module.exports = router;
