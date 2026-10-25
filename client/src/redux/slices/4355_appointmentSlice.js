import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/4355_axiosConfig";

// Book a new appointment
export const bookAppointment = createAsyncThunk(
  "appointment/book",
  async (appointmentData, thunkAPI) => {
    try {
      const response = await API.post("/appointments", appointmentData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Booking failed"
      );
    }
  }
);

// Get logged-in user's appointments
export const fetchMyAppointments = createAsyncThunk(
  "appointment/fetchMy",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/appointments/my");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch appointments"
      );
    }
  }
);

// Cancel an appointment
export const cancelAppointment = createAsyncThunk(
  "appointment/cancel",
  async (appointmentId, thunkAPI) => {
    try {
      const response = await API.put(`/appointments/${appointmentId}/cancel`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Cancellation failed"
      );
    }
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointments: [],
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearAppointmentMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Book appointment
      .addCase(bookAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(bookAppointment.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "Appointment booked successfully!";
      })
      .addCase(bookAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch my appointments
      .addCase(fetchMyAppointments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchMyAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Cancel appointment
      .addCase(cancelAppointment.fulfilled, (state, action) => {
        const updated = action.payload.appointment;
        state.appointments = state.appointments.map((appt) =>
          appt._id === updated._id ? updated : appt
        );
        state.successMessage = "Appointment cancelled";
      });
  },
});

export const { clearAppointmentMessages } = appointmentSlice.actions;
export default appointmentSlice.reducer;