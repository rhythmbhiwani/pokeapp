import { IPokemon } from "@repo/shared-types";
import { Router } from "express";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { isDevelopment, isProduction } from "../constants/environment";
import DailyPokemon from "../data/modals/DAILY_POKEMON";
import Pokemon from "../data/modals/POKEMON";
import { fetchAllPokemons, fetchPokemon } from "../helper/fetchPokemon";

const pokemonRouter = Router();

pokemonRouter.get("/", async (req, res) => {
  const { id } = req.query;

  // Convert id to a number and validate
  const pokemonId = Number(id);
  if (isNaN(pokemonId) || !Number.isInteger(pokemonId) || pokemonId <= 0) {
    return res
      .status(400)
      .json({ message: "Invalid Pokemon ID. Must be a positive integer." });
  }

  try {
    let pokemon = await Pokemon.findOne({ id: pokemonId });
    if (!pokemon) {
      const newPokemon = await fetchPokemon(pokemonId);
      pokemon = new Pokemon({ id: newPokemon.id, data: newPokemon });
      await pokemon.save();
    }
    res.json(pokemon.data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Pokemon not found" });
  }
});

pokemonRouter.get("/random", async (req, res) => {
  let userId = req.cookies.userId;

  if (!userId) {
    userId = uuidv4(); // Generate a new user ID
    res.cookie("userId", userId, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
    });
  }

  try {
    let pokemon = await DailyPokemon.findOne({ userId });
    if (!pokemon) {
      const randomId = Math.floor(Math.random() * 1000) + 1;
      const newPokemon = await fetchPokemon(randomId);
      pokemon = new DailyPokemon({
        id: newPokemon.id,
        userId: userId,
        data: newPokemon,
        expireAt: moment()
          .endOf(isDevelopment ? "minute" : "day")
          .toDate(),
      });

      await pokemon.save();
    }

    res.json(pokemon.data);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    res.status(500).json({ message: "Error fetching random Pokemon" });
  }
});

pokemonRouter.get("/search", async (req, res) => {
  const { query } = req.query;

  if (typeof query !== "string") {
    return res.status(400).json({ error: "Query must be a string" });
  }

  const lowercasedName = query.toLowerCase();
  try {
    const findPokemons = (
      await Pokemon.find({
        "data.name": { $regex: lowercasedName, $options: "i" },
      })
    ).map((p) => p.data as IPokemon);

    const allPokemons = await fetchAllPokemons();
    const filteredPokemons = allPokemons.results.filter(
      (p) =>
        p.name.includes(lowercasedName) &&
        !findPokemons.find((poke) => poke.name === p.name)
    );

    return res.json({
      foundPokemons: findPokemons,
      otherPokemons: filteredPokemons,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(404).json({ message: error });
  }
});

export { pokemonRouter };
