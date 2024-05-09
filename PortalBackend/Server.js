const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

const dbConnection = require("./Configs/DBConnection");
dbConnection();

const TrainerRoutes = require("./Routes/TrainerRoutes");
const StudentRoutes = require("./Routes/StudentRoutes");
const AdminRoutes = require("./Routes/AdminRoutes");
const CourcesRoutes = require("./Routes/CourcesRoutes");
app.use(express.json());

app.use("/trainer", TrainerRoutes);
app.use("/student", StudentRoutes);
app.use("/admin", AdminRoutes);
app.use("/api/course", CourcesRoutes);

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Running on ${port} port`);
});
