// // // // const express = require("express");
// // // // const dotenv = require("dotenv");
// // // // const cors = require("cors");
// // // // const connectDB = require("./config/db");

// // // // dotenv.config();
// // // // connectDB();

// // // // const app = express();

// // // // app.use(express.json());
// // // // app.use(cors());

// // // // app.get("/", (req, res) => {
// // // //   res.json({ message: "MediCheck Express Server is running!" });
// // // // });

// // // // const PORT = process.env.PORT || 5000;

// // // // app.listen(PORT, () => {
// // // //   console.log(`Server running on port ${PORT}`);
// // // // });

// // // const express = require("express");
// // // const dotenv = require("dotenv");
// // // const cors = require("cors");
// // // const connectDB = require("./config/db");
// // // const authRoutes = require("./routes/authRoutes");

// // // dotenv.config();
// // // connectDB();

// // // const app = express();

// // // app.use(express.json());
// // // app.use(cors());

// // // app.get("/", (req, res) => {
// // //   res.json({ message: "MediCheck Express Server is running!" });
// // // });

// // // app.use("/api/auth", authRoutes);

// // // const PORT = process.env.PORT || 5000;

// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });
// // const express = require("express");
// // const dotenv = require("dotenv");
// // const cors = require("cors");
// // const connectDB = require("./config/db");
// // const authRoutes = require("./routes/authRoutes");
// // const symptomRoutes = require("./routes/symptomRoutes");

// // dotenv.config();
// // connectDB();

// // const app = express();

// // app.use(express.json());
// // app.use(cors());

// // app.get("/", (req, res) => {
// //   res.json({ message: "MediCheck Express Server is running!" });
// // });

// // app.use("/api/auth", authRoutes);
// // app.use("/api/symptoms", symptomRoutes);

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const symptomRoutes = require("./routes/symptomRoutes");
// const doctorRoutes = require("./routes/doctorRoutes");

// dotenv.config();
// connectDB();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.json({ message: "MediCheck Express Server is running!" });
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/symptoms", symptomRoutes);
// app.use("/api/doctors", doctorRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/4355_db");
const authRoutes = require("./routes/4355_authRoutes");
const symptomRoutes = require("./routes/4355_symptomRoutes");
const doctorRoutes = require("./routes/4355_doctorRoutes");
const appointmentRoutes = require("./routes/4355_appointmentRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "MediCheck Express Server is running!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/symptoms", symptomRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});