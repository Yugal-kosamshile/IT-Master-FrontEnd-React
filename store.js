import { configureStore, createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: JSON.parse(localStorage.getItem("dashboard") || "[]"),
  reducers: {
    addToDashboard: (state, action) => {
      const exists = state.find(course => course.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem("dashboard", JSON.stringify(state));
      }
    },
    removeCourse: (state, action) => {
      const updatedState = state.filter(course => course.id !== action.payload.id);
      localStorage.setItem("dashboard", JSON.stringify(updatedState));
      return updatedState;
    },
    clearDashboard: () => {
      localStorage.setItem("dashboard", JSON.stringify([]));
      return [];
    },
    setCourses: (state, action) => {
      localStorage.setItem("dashboard", JSON.stringify(action.payload));
      return action.payload;
    }
  }
});

const Store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer // ✅ this is the correct usage
  }
});

export default Store;
export const { addToDashboard, removeCourse, clearDashboard, setCourses } = dashboardSlice.actions;
