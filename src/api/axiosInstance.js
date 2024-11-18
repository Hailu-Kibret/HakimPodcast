import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // Replace with your API base URL
  timeout: 10000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers if required, e.g., authorization token
  },
});
