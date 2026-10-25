const Doctor = require("../models/4355_Doctor");

// @desc   Get all doctors
// @route  GET /api/doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Get doctors by specialization
// @route  GET /api/doctors/:specialization
const getDoctorsBySpecialization = async (req, res) => {
  try {
    const { specialization } = req.params;
    const doctors = await Doctor.find({
      specialization: { $regex: specialization, $options: "i" },
    });
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getAllDoctors, getDoctorsBySpecialization };