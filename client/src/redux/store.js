import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/4355_authSlice";
import symptomReducer from "./slices/4355_symptomSlice";
import doctorReducer from "./slices/4355_doctorSlice";
import appointmentReducer from "./slices/4355_appointmentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    symptom: symptomReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
  },
});