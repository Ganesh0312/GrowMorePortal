const Trainer = require("../Models/TrainerModel");

exports.createTrainer = async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.status(201).json(trainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.getTrainerById = async (req, res) => {
//   try {
//     const trainer = await Trainer.findById(req.params.id);
//     if (!trainer) {
//       return res.status(404).json({ message: "Trainer not found" });
//     }
//     res.json(trainer);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

exports.updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }
    res.json(trainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);
    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }
    res.json({ message: "Trainer deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
