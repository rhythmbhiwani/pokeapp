import axios from "axios";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
