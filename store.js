// import { configureStore, createSlice } from "@reduxjs/toolkit";

// // --- Dashboard Slice ---
// const dashboardSlice = createSlice({
//   name: "dashboard",
//   initialState: JSON.parse(localStorage.getItem("dashboard") || "[]"),
//   reducers: {
//     addToDashboard: (state, action) => {
//       const exists = state.find(course => course.id === action.payload.id);
//       if (!exists) {
//         state.push(action.payload);
//         localStorage.setItem("dashboard", JSON.stringify(state));
//       }
//     },
//     removeCourse: (state, action) => {
//       const updatedState = state.filter(course => course.id !== action.payload.id);
//       localStorage.setItem("dashboard", JSON.stringify(updatedState));
//       return updatedState;
//     },
//     clearDashboard: () => {
//       localStorage.setItem("dashboard", JSON.stringify([]));
//       return [];
//     },
//     setCourses: (state, action) => {
//       localStorage.setItem("dashboard", JSON.stringify(action.payload));
//       return action.payload;
//     }
//   }
// });

// // --- Auth Slice ---
// const authSlice = createSlice({
//   name: "auth",
//   initialState: JSON.parse(localStorage.getItem("auth")) || {
//     isLoggedIn: false,
//     user: null
//   },
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload;
//       localStorage.setItem("auth", JSON.stringify({
//         isLoggedIn: true,
//         user: action.payload
//       }));
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.user = null;
//       localStorage.removeItem("auth");
//     }
//   }
// });

// // --- Image Slice ---
// const imageSlice = createSlice({
//   name: "images",
//   initialState: {
//     // Maps course ID to image URL
//     1: "/courseImages/course1.jpg",
//     2: "/courseImages/course2.jpg",
//     3: "/courseImages/course3.jpg",
//     4: "/courseImages/course4.jpg",
//     // Add more mappings as needed
//   },
//   reducers: {
//     setImageForCourse: (state, action) => {
//       const { courseId, imageUrl } = action.payload;
//       state[courseId] = imageUrl;
//     }
//   }
// });


// // --- Store ---
// const Store = configureStore({
//   reducer: {
//     dashboard: dashboardSlice.reducer,
//     auth: authSlice.reducer,
//     images:imageSlice.reducer
//   }
// });

// // --- Exports ---
// export default Store;
// export const {
//   addToDashboard,
//   removeCourse,
//   clearDashboard,
//   setCourses
// } = dashboardSlice.actions;

// export const {
//   loginSuccess,
//   logout
// } = authSlice.actions;

// export const {setImageForCourse} = imageSlice.actions;

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

// --- Auth Slice (Inline) ---
const storedAuth = localStorage.getItem("auth");
const authSlice = createSlice({
  name: "auth",
  initialState: storedAuth
    ? JSON.parse(storedAuth)
    : {
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

// --- Image Slice ---
const imageSlice = createSlice({
  name: "images",
  initialState: {
     1: "/courseImages/course1.jpg",
  2: "/courseImages/course2.jpg",
  3: "/courseImages/course3.jpg",
  4: "/courseImages/course4.jpg",
  5: "/courseImages/course5.jpg",
  6: "/courseImages/course6.jpg",
  7: "/courseImages/course7.jpg",
  8: "/courseImages/course8.jpg",
  9: "/courseImages/course9.jpg",
  10: "/courseImages/course10.jpg",
  11: "/courseImages/course11.jpg",
  12: "/courseImages/course12.jpg"
  },
  reducers: {
    setImageForCourse: (state, action) => {
      const { courseId, imageUrl } = action.payload;
      state[courseId] = imageUrl;
    }
  }
});

// --- Store Setup ---
const Store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
    auth: authSlice.reducer,
    images: imageSlice.reducer
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

export const {
  setImageForCourse
} = imageSlice.actions;
