import { IPokemon, IPokemonList } from "@repo/shared-types";
import { axiosInstance } from "./axiosInstance";

export const fetchPokemon = async (id: number) => {
  const pokemon = await axiosInstance
    .get(`/${id}`)
    .then((res) => res.data as IPokemon);
  return pokemon;
};

export const fetchAllPokemons = async () => {
  const pokemons = await axiosInstance
    .get(`/`, {
      params: {
        limit: 100000,
        offset: 0,
      },
    })
    .then((res) => res.data as IPokemonList);
  return pokemons;
};
