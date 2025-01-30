"use client";

import FullPageLoadingSpinner from "@/components/full-page-loading-spinner";
import SearchBar from "@/components/search-bar";
import { useFetchRandomPokemon } from "@/hooks/useFetchRandomPokemon";
import Image from "next/image";

export default function Web() {
  const { data, isLoading } = useFetchRandomPokemon();

  if (isLoading) {
    return <FullPageLoadingSpinner />;
  }

  const image =
    data?.sprites?.other["official-artwork"]?.front_default ||
    data?.sprites?.front_default;

  return (
    <section className="w-full h-full mt-10 flex-col space-y-10 flex items-center justify-center p-10">
      {image && <Image width={250} height={250} src={image} alt={data.name} />}
      {data && (
        <span>
          A <span className="font-bold">{data.name}</span> has appeared
        </span>
      )}
      <SearchBar />
    </section>
  );
}
