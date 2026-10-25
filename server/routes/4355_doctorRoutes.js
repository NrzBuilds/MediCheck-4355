// const express = require("express");
// const router = express.Router();
// const {
//   getAllDoctors,
//   getDoctorsBySpecialization,
// } = require("../controllers/doctorController");

// router.get("/", getAllDoctors);
// router.get("/:specialization", getDoctorsBySpecialization);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getAllDoctors,
  getDoctorsBySpecialization,
} = require("../controllers/4355_doctorController");

router.get("/", getAllDoctors);
router.get("/:specialization", getDoctorsBySpecialization);

module.exports = router;