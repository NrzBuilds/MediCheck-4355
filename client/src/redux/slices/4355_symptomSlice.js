import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/4355_axiosConfig";

// Fetch all available symptoms from backend
export const fetchSymptomsList = createAsyncThunk(
  "symptom/fetchList",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/symptoms/list");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch symptoms"
      );
    }
  }
);

// Submit selected symptoms and get prediction
export const checkSymptoms = createAsyncThunk(
  "symptom/check",
  async (symptoms, thunkAPI) => {
    try {
      const response = await API.post("/symptoms/check", { symptoms });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Prediction failed"
      );
    }
  }
);

// Fetch user's symptom check history
export const fetchHistory = createAsyncThunk(
  "symptom/fetchHistory",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/symptoms/history");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch history"
      );
    }
  }
);

const symptomSlice = createSlice({
  name: "symptom",
  initialState: {
    allSymptoms: [],
    selectedSymptoms: [],
    result: null,
    history: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleSymptom: (state, action) => {
      const symptom = action.payload;
      if (state.selectedSymptoms.includes(symptom)) {
        state.selectedSymptoms = state.selectedSymptoms.filter(
          (s) => s !== symptom
        );
      } else {
        state.selectedSymptoms.push(symptom);
      }
    },
    clearResult: (state) => {
      state.result = null;
    },
    clearSymptomError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch symptoms list
      .addCase(fetchSymptomsList.fulfilled, (state, action) => {
        state.allSymptoms = action.payload.symptoms;
      })
      // Check symptoms (predict)
      .addCase(checkSymptoms.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.result = null;
      })
      .addCase(checkSymptoms.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(checkSymptoms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch history
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.history = action.payload;
      });
  },
});

export const { toggleSymptom, clearResult, clearSymptomError } =
  symptomSlice.actions;
export default symptomSlice.reducer;