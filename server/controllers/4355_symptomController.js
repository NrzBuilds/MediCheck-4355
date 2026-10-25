const axios = require("axios");
const History = require("../models/4355_History");

// @desc   Check symptoms via FastAPI and save result
// @route  POST /api/symptoms/check
const checkSymptoms = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.length === 0) {
      return res.status(400).json({ message: "Please provide symptoms" });
    }

    // Call FastAPI service
    const fastApiResponse = await axios.post(
      `${process.env.FASTAPI_URL}/predict`,
      { symptoms }
    );

    const { predicted_disease, recommended_doctor } = fastApiResponse.data;

    // Save result to History collection
    const history = await History.create({
      userId: req.user._id,
      symptoms,
      predictedDisease: predicted_disease,
      recommendedDoctor: recommended_doctor,
    });

    res.status(201).json({
      predictedDisease: predicted_disease,
      recommendedDoctor: recommended_doctor,
      historyId: history._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error checking symptoms",
      error: error.message,
    });
  }
};

// @desc   Get logged-in user's symptom check history
// @route  GET /api/symptoms/history
const getHistory = async (req, res) => {
  try {
    const history = await History.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// @desc   Get list of all symptoms (for frontend checkboxes)
// @route  GET /api/symptoms/list
const getSymptomsList = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.FASTAPI_URL}/symptoms`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching symptoms list",
      error: error.message,
    });
  }
};

module.exports = { checkSymptoms, getHistory, getSymptomsList };