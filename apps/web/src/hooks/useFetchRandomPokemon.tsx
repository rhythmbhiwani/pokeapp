import { axiosInstance } from "@/lib/axiosInstance";
import { IPokemon } from "@repo/shared-types";
import { useQuery } from "@tanstack/react-query";

export const useFetchRandomPokemon = () => {
  return useQuery({
    queryKey: ["random-pokemon"],
    queryFn: async () =>
      axiosInstance
        .get("/pokemon/random", { withCredentials: true })
        .then((res) => res.data as IPokemon),
  });
};
