import axios from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log("API_BASE_URL", API_BASE_URL);
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
