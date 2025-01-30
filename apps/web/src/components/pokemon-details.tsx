"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import type { IPokemon } from "@repo/shared-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchAllSprites, spriteLabels } from "@/lib/pokemon-sprites";

interface PokemonDetailsProps {
  pokemon: IPokemon;
}

export function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const availableSprites = useMemo(() => {
    return fetchAllSprites(pokemon);
  }, [pokemon.sprites]);

  const defaultSprite = availableSprites["other.official-artwork.front_default"]
    ? "other.official-artwork.front_default"
    : Object.keys(availableSprites)[0] || "front_default";

  const [activeSprite, setActiveSprite] = useState<string>(defaultSprite);
  const [activeTab, setActiveTab] = useState<"stats" | "abilities" | "types">(
    "stats"
  );

  return (
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold capitalize text-gray-900">
          {pokemon.name}
        </h2>
        <p className="text-gray-500 text-lg">Pokedex #{pokemon.id}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center">
          <Image
            src={availableSprites[activeSprite] || ""}
            alt={`${pokemon.name} sprite`}
            width={250}
            height={250}
            className="object-contain drop-shadow-lg"
          />
          <Select value={activeSprite} onValueChange={setActiveSprite}>
            <SelectTrigger className="mt-4 w-60 border-gray-300 shadow-sm rounded-lg">
              <SelectValue placeholder="Select sprite" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md rounded-lg">
              {Object.entries(availableSprites).map(([key]) => (
                <SelectItem key={key} value={key}>
                  {spriteLabels[key] || key.split(".").pop()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {pokemon?.cries?.latest && (
            <button
              onClick={() => {
                const sound = pokemon?.cries?.latest;
                if (sound) {
                  const audio = new Audio(sound);
                  audio.play();
                }
              }}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition w-full text-lg shadow-md"
            >
              Play Cry
            </button>
          )}
        </div>
        <div>
          <div className="flex justify-around pb-2">
            {(["stats", "abilities", "types"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-lg font-medium transition-all ${activeTab === tab ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="mt-4">
            {activeTab === "stats" && (
              <ul className="grid grid-cols-2 gap-4">
                {pokemon.stats.map((stat) => (
                  <li
                    key={stat.stat.name}
                    className="flex justify-between bg-gray-100 p-2 rounded-lg"
                  >
                    <span className="capitalize font-medium text-gray-700">
                      {stat.stat.name}:
                    </span>
                    <span className="font-semibold text-gray-900">
                      {stat.base_stat}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "abilities" && (
              <ul className="space-y-2">
                {pokemon.abilities.map((ability) => (
                  <li
                    key={ability.ability.name}
                    className="text-lg font-medium capitalize bg-gray-100 p-2 rounded-lg"
                  >
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "types" && (
              <div className="flex flex-wrap gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="px-3 py-1 bg-gray-200 rounded-full text-lg capitalize font-semibold text-gray-800"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
