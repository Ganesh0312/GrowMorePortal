const express = require("express");
const router = express.Router();
const trainerController = require("../Controllers/TrainerController");

router.post("/add-trainers", trainerController.createTrainer);
router.get("/get-trainers", trainerController.getAllTrainers);
router.put("/update-trainers/:id", trainerController.updateTrainer);
router.delete("/delete-trainers/:id", trainerController.deleteTrainer);

module.exports = router;
