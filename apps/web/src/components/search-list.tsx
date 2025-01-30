import FullPageLoadingSpinner from "@/components/full-page-loading-spinner";
import { useSearchPokemon } from "@/hooks/useSearchPokemon";
import { useSearchParams } from "next/navigation";
import FullPageError from "./full-page-error";
import Link from "next/link";
import Image from "next/image";

const extractIdFromUrl = (url: string): string => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

function SearchList() {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");
  const {
    data,
    isLoading: isSearchingPokemon,
    isError,
  } = useSearchPokemon({ query: query || "" });

  if (isSearchingPokemon) {
    return <FullPageLoadingSpinner />;
  }

  if (!data || isError) {
    return (
      <FullPageError message="We are having trouble searching for your pokemon" />
    );
  }

  if (data.foundPokemons.length === 0 && data.otherPokemons.length === 0) {
    return <FullPageError message="Looks like your pokemon doesn't exists" />;
  }

  return (
    <div className="mt-10 lg:mt-20 px-5 lg:px-20">
      {data.foundPokemons.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">We found some Pokemon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {data.foundPokemons.map((pokemon) => {
              const image =
                pokemon?.sprites?.other["official-artwork"]?.front_default ||
                pokemon?.sprites?.front_default;
              return (
                <Link
                  href={`/pokemon/${pokemon.id}`}
                  key={pokemon.id}
                  className="block"
                >
                  <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow">
                    {image && (
                      <Image
                        src={image}
                        alt={pokemon.name}
                        width={120}
                        height={120}
                        className="mx-auto mb-2"
                        unoptimized
                      />
                    )}
                    <h3 className="text-xl font-semibold text-center capitalize">
                      {pokemon.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {data.otherPokemons.length > 0 && (
        <div className="mt-10 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Some other Pokemon we found
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 gap-5">
            {data.otherPokemons.map((pokemon) => {
              const id = extractIdFromUrl(pokemon.url);
              return (
                <Link href={`/pokemon/${id}`} key={id} className="block">
                  <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-center capitalize">
                      {pokemon.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchList;
