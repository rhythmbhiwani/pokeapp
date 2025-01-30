import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
  {
    id: String,
    data: Object,
  },
  { timestamps: true }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;
