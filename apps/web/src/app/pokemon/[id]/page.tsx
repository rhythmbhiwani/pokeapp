import FullPageError from "@/components/full-page-error";
import FullPageLoadingSpinner from "@/components/full-page-loading-spinner";
import { PokemonDetails } from "@/components/pokemon-details";
import { API_BASE_URL } from "@/lib/axiosInstance";

import { Suspense } from "react";

async function fetchPokemon(id: number) {
  try {
    const res = await fetch(`${API_BASE_URL}/pokemon?id=${id}`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Pokemon not found");
    }

    return res.json();
  } catch (error) {
    return null;
  }
}

async function PokemonPage({ id }: { id: number }) {
  const data = await fetchPokemon(id);

  if (!data) {
    return <FullPageError message="Pokemon not found" />;
  }

  return (
    <div className="flex items-center justify-center mt-20">
      <PokemonDetails pokemon={data} />
    </div>
  );
}

export default function Page({ params }: { params: { id: number } }) {
  return (
    <Suspense fallback={<FullPageLoadingSpinner />}>
      <PokemonPage id={params.id} />
    </Suspense>
  );
}
