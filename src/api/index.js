import axios from "axios";
const env = process.env.REACT_APP_ENV || "local";
const instance = axios.create({
  baseURL:
    env === "production"
      ? "https://portfolio-api-zeta-seven.vercel.app/api/v1"
      : "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json", // Set default headers
    // Add other default headers if needed
  },
});

const baseURL =
  process.env.REACT_APP_ENV === "production"
    ? "https://portfolio-api-zeta-seven.vercel.app/api/v1"
    : "http://localhost:5000/api/v1";
    
export const sendMail = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/mail`, data);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log("Error occured", error?.message);
  }
};

export default instance;
