import { IPokemon } from "@repo/shared-types";

export const spriteLabels: { [key: string]: string } = {
  front_default: "Front",
  back_default: "Back",
  front_shiny: "Shiny Front",
  back_shiny: "Shiny Back",
  front_female: "Female Front",
  back_female: "Female Back",
  front_shiny_female: "Shiny Female Front",
  back_shiny_female: "Shiny Female Back",
  "other.official-artwork.front_default": "Official Artwork",
  "other.official-artwork.front_shiny": "Shiny Official Artwork",
};

export const fetchAllSprites = (pokemon: IPokemon) => {
  const sprites: { [key: string]: string } = {};

  const addSprite = (obj: any, prefix = "") => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "string" && value) {
        sprites[prefix + key] = value;
      } else if (typeof value === "object" && value !== null) {
        addSprite(value, `${prefix}${key}.`);
      }
    }
  };

  addSprite(pokemon.sprites);
  return sprites;
};
