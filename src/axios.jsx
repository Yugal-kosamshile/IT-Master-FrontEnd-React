// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8082/api",
// });
// delete API.defaults.headers.common["Authorization"];
// export default API;

// src/axios.jsx
import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-rest-faqo.onrender.com/api",
});

delete API.defaults.headers.common["Authorization"];
export default API;
