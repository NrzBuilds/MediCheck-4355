// const express = require("express");
// const router = express.Router();
// const {
//   checkSymptoms,
//   getHistory,
//   getSymptomsList,
// } = require("../controllers/symptomController");
// const protect = require("../middleware/authMiddleware");

// router.get("/list", getSymptomsList);
// router.post("/check", protect, checkSymptoms);
// router.get("/history", protect, getHistory);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  checkSymptoms,
  getHistory,
  getSymptomsList,
} = require("../controllers/4355_symptomController");
const protect = require("../middleware/4355_authMiddleware");

router.get("/list", getSymptomsList);
router.post("/check", protect, checkSymptoms);
router.get("/history", protect, getHistory);

module.exports = router;