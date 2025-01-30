import { log } from "@repo/logger";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { pokemonRouter } from "./routes/pokemon";
import { createServer } from "./server";

dotenv.config();

const port = process.env.PORT || 3001;
const server = createServer();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => log("MongoDB Connected"))
  .catch((err) => console.error(err));

server.use("/pokemon", pokemonRouter);

server.listen(port, () => {
  log(`api running on ${port}`);
});
