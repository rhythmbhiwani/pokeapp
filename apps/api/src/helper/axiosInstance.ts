import { POKEAPI_URL } from "@/constants";
import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = axios.create({
  baseURL: POKEAPI_URL,
});
export const axiosInstance = setupCache(instance);
