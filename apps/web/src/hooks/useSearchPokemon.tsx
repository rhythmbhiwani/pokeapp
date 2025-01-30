import { axiosInstance } from "@/lib/axiosInstance";
import { IPokemon, IPokemonList } from "@repo/shared-types";
import { useQuery } from "@tanstack/react-query";

interface Params {
  query: string;
}

export const useSearchPokemon = ({ query }: Params) => {
  return useQuery({
    queryKey: ["search-pokemon", query],
    queryFn: async () =>
      axiosInstance
        .get("/pokemon/search", {
          params: { query },
          withCredentials: true,
        })
        .then(
          (res) =>
            res.data as {
              foundPokemons: IPokemon[];
              otherPokemons: IPokemonList["results"];
            }
        ),
  });
};
