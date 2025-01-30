import mongoose from "mongoose";

const dailyPokemonSchema = new mongoose.Schema(
  {
    id: String,
    userId: String,
    data: Object,
    expireAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

dailyPokemonSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

const DailyPokemon = mongoose.model("DailyPokemon", dailyPokemonSchema);

export default DailyPokemon;
