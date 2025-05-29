import { configureStore, createSlice } from "@reduxjs/toolkit";

// --- Dashboard Slice ---
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

// --- Auth Slice ---
const authSlice = createSlice({
  name: "auth",
  initialState: JSON.parse(localStorage.getItem("auth")) || {
    isLoggedIn: false,
    user: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify({
        isLoggedIn: true,
        user: action.payload
      }));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("auth");
    }
  }
});


// --- Store ---
const Store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
    auth: authSlice.reducer
  }
});

// --- Exports ---
export default Store;
export const {
  addToDashboard,
  removeCourse,
  clearDashboard,
  setCourses
} = dashboardSlice.actions;

export const {
  loginSuccess,
  logout
} = authSlice.actions;
