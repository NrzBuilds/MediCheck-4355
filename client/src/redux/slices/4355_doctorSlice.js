import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/4355_axiosConfig";
// Fetch all doctors
export const fetchAllDoctors = createAsyncThunk(
  "doctor/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/doctors");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch doctors"
      );
    }
  }
);

// Fetch doctors by specialization
export const fetchDoctorsBySpecialization = createAsyncThunk(
  "doctor/fetchBySpecialization",
  async (specialization, thunkAPI) => {
    try {
      const response = await API.get(`/doctors/${specialization}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch doctors"
      );
    }
  }
);

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchAllDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDoctorsBySpecialization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorsBySpecialization.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctorsBySpecialization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default doctorSlice.reducer;