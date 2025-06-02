// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8082/api",
// });
// delete API.defaults.headers.common["Authorization"];
// export default API;

// src/axios.jsx
import axios from "axios";

const API = axios.create({
  baseURL: "https://it-master-rest.onrender.com/api",
  // baseURL: "http://localhost:8082/api",
});

delete API.defaults.headers.common["Authorization"];
export default API;
