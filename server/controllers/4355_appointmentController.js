const Appointment = require("../models/4355_Appointment");

// @desc   Book a new appointment
// @route  POST /api/appointments
const bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, timeSlot } = req.body;

    if (!doctorId || !date || !timeSlot) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // Validate date is not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);

    if (isNaN(selectedDate.getTime())) {
      return res.status(400).json({ message: "Invalid date format" });
    }

    if (selectedDate < today) {
      return res
        .status(400)
        .json({ message: "Cannot book an appointment for a past date" });
    }

    // Validate timeSlot format (HH:MM, 24-hour)
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(timeSlot)) {
      return res.status(400).json({ message: "Invalid time format" });
    }

    const appointment = await Appointment.create({
      userId: req.user._id,
      doctorId,
      date,
      timeSlot,
      status: "pending",
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Get logged-in user's appointments
// @route  GET /api/appointments/my
const getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user._id })
      .populate("doctorId", "name specialization contact")
      .sort({ createdAt: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Cancel an appointment
// @route  PUT /api/appointments/:id/cancel
const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Make sure the logged-in user owns this appointment
    if (appointment.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    appointment.status = "cancelled";
    await appointment.save();

    // Populate doctor details before sending response back
    await appointment.populate("doctorId", "name specialization contact");

    res.status(200).json({ message: "Appointment cancelled", appointment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { bookAppointment, getMyAppointments, cancelAppointment };