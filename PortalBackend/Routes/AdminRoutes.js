const express = require("express");
const getAdminController = require("../Controllers/AdminController");
const router = express.Router();

router.post("/login", getAdminController);

module.exports = router;
