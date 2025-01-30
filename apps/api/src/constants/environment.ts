import dotenv from "dotenv";

dotenv.config();

export const ENVIRONMENT = process.env.ENVIRONMENT;
export const isDevelopment = ENVIRONMENT === "development";
export const isProduction = ENVIRONMENT === "production";
