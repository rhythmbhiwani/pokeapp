interface APIResource {
  /** The URL of the referenced resource. */
  url: string;
  [property: string]: any;
}

interface Effect {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The language this effect is in. */
  language: NamedAPIResource;
  [property: string]: any;
}

interface FlavorText {
  /** The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version. Please check out this <a href='https://github.com/veekun/pokedex/issues/218#issuecomment-339841781' >issue</a> to find out more. */
  flavor_text: string;
  /** The language this name is in. */
  language: NamedAPIResource;
  version_group: null | NamedAPIResource;
  [property: string]: any;
}

interface MachineVersionDetail {
  /** The machine that teaches a move from an item. */
  machine: APIResource;
  /** The version group of this specific machine. */
  version_group: NamedAPIResource;
  [property: string]: any;
}

interface Name {
  /** The language this name is in. */
  language: NamedAPIResource;
  /** The localized name for an API resource in a specific language. */
  name: string;
  [property: string]: any;
}

interface NamedAPIResource {
  /** The name of the referenced resource. */
  name: string;
  /** The URL of the referenced resource. */
  url: string;
  [property: string]: any;
}

interface VerboseEffect {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The language this effect is in. */
  language: NamedAPIResource;
  /** The localized effect text in brief. */
  short_effect: string;
  [property: string]: any;
}

interface VersionGameIndex {
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** The version relevent to this game index. */
  version: NamedAPIResource;
  [property: string]: any;
}

interface EffectChange {
  /** The previous effect of this ability listed in different languages. */
  effect_entries: Effect[];
  /** The version group in which the previous effect of this ability originated. */
  version_group: NamedAPIResource;
  [property: string]: any;
}

interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: NamedAPIResource;
  [property: string]: any;
}

interface EvolutionDetail {
  /** The id of the gender of the evolving Pokemon species must be in order to evolve into this Pokemon species. */
  gender: number | null;
  /** The item the evolving Pokemon species must be holding during the evolution trigger event to evolve into this Pokemon species. */
  held_item: null | NamedAPIResource;
  /** The item required to cause evolution this into Pokemon species. */
  item: null | NamedAPIResource;
  /** The move that must be known by the evolving Pokemon species during the evolution trigger event in order to evolve into this Pokemon species. */
  known_move: null | NamedAPIResource;
  /** The evolving Pokemon species must know a move with this type during the evolution trigger event in order to evolve into this Pokemon species. */
  known_move_type: null | NamedAPIResource;
  /** The location the evolution must be triggered at. */
  location: null | NamedAPIResource;
  /** The minimum required level of affection the evolving Pokemon species to evolve into this Pokemon species. */
  min_affection: number | null;
  /** The minimum required level of beauty the evolving Pokemon species to evolve into this Pokemon species. */
  min_beauty: number | null;
  /** The minimum required level of happiness the evolving Pokemon species to evolve into this Pokemon species. */
  min_happiness: number | null;
  /** The minimum required level of the evolving Pokemon species to evolve into this Pokemon species. */
  min_level: number | null;
  /** Whether or not it must be raining in the overworld to cause evolution this Pokemon species. */
  needs_overworld_rain: boolean;
  /** The Pokemon species that must be in the players party in order for the evolving Pokemon species to evolve into this Pokemon species. */
  party_species: null | NamedAPIResource;
  /** The player must have a Pokemon of this type in their party during the evolution trigger event in order for the evolving Pokemon species to evolve into this Pokemon species. */
  party_type: null | NamedAPIResource;
  /** The required relation between the Pokemon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
  relative_physical_stats: number | null;
  /** The required time of day. Day or night. */
  time_of_day: string;
  /** Pokemon species for which this one must be traded. */
  trade_species: null | NamedAPIResource;
  /** The type of event that triggers evolution into this Pokemon species. */
  trigger: NamedAPIResource;
  /** Whether or not the 3DS needs to be turned upside-down as this Pokemon levels up. */
  turn_upside_down: boolean;
  [property: string]: any;
}

interface RarityVersion {
  rarity: number;
  version: NamedAPIResource;
  [property: string]: any;
}

/** Moves are the skills of Pokemon in battle. In battle, a Pokemon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas. */
interface Move {
  /** The percent value of how likely this move is to be successful. */
  accuracy: number | null;
  /** A detail of normal and super contest combos that require this move. */
  contest_combos: null | ContestCombos;
  /** The effect the move has when used in a contest. */
  contest_effect: null | APIResource;
  /** The type of appeal this move gives a Pokemon when used in a contest. */
  contest_type: null | NamedAPIResource;
  /** The type of damage the move inflicts on the target, e.g. physical. */
  damage_class: NamedAPIResource;
  /** The percent value of how likely it is this moves effect will happen. */
  effect_chance: number | null;
  /** The list of previous effects this move has had across version groups of the games. */
  effect_changes: EffectChange[];
  /** The effect of this move listed in different languages. */
  effect_entries: VerboseEffect[];
  /** The flavor text of this move listed in different languages. */
  flavor_text_entries: FlavorText[];
  /** The generation in which this move was introduced. */
  generation: NamedAPIResource;
  /** The identifier for this resource. */
  id: number;
  /** List of Pokemon that can learn the move */
  learned_by_pokemon: NamedAPIResource[];
  /** A list of the machines that teach this move. */
  machines: MachineVersionDetail[];
  /** Metadata about this move */
  meta: null | Meta;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of move resource value changes across version groups of the game. */
  past_values: Move[];
  /** The base power of this move with a value of 0 if it does not have a base power. */
  power: number | null;
  /** Power points. The number of times this move can be used. */
  pp: number | null;
  /** A value between -8 and 8. Sets the order in which moves are executed during battle. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail. */
  priority: number;
  /** A list of stats this moves effects and how much it effects them. */
  stat_changes: StatChange[];
  /** The effect the move has when used in a super contest. */
  super_contest_effect: null | APIResource;
  /** The type of target that will receive the effects of the attack. */
  target: NamedAPIResource;
  /** The elemental type of this move. */
  type: NamedAPIResource;
  [property: string]: any;
}

interface ContestCombos {
  normal: ComboDetail;
  super: ComboDetail;
  [property: string]: any;
}

interface ComboDetail {
  use_after: NamedAPIResource[] | null;
  use_before: NamedAPIResource[] | null;
  [property: string]: any;
}

interface Meta {
  ailment: NamedAPIResource;
  ailment_chance: number;
  category: NamedAPIResource;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: number | null;
  max_turns: number | null;
  min_hits: number | null;
  min_turns: number | null;
  stat_chance: number;
  [property: string]: any;
}

interface StatChange {
  change: number;
  stat: NamedAPIResource;
  [property: string]: any;
}

/** Pokemon are the creatures that inhabit the world of the Pokemon games. They can be caught using Pokéballs and trained by battling with other Pokemon.  Each Pokemon belongs to a specific species but may take on a variant which makes it differ from other Pokemon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail. */
export interface IPokemon {
  /** A list of abilities this Pokemon could potentially have. */
  abilities: PokemonAbility[];
  /** The base experience gained for defeating this Pokemon. */
  base_experience: number;
  /** A set of cries used to depict this Pokemon in the game. A visual representation of the various cries can be found at <a href='https://github.com/PokeAPI/cries#cries'>PokeAPI/cries</a> */
  cries: Cries;
  /** A list of forms this Pokemon can take on. */
  forms: NamedAPIResource[];
  /** A list of game indices relevent to Pokemon item by generation. */
  game_indices: VersionGameIndex[];
  /** The height of this Pokemon in decimetres. */
  height: number;
  /** A list of items this Pokemon may be holding when encountered. */
  held_items: HeldItem[];
  /** The identifier for this resource. */
  id: number;
  /** Set for exactly one Pokemon used as the default for each species. */
  is_default: boolean;
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups. */
  moves: MoveElement[];
  /** The name for this resource. */
  name: string;
  /** Order for sorting. Almost national order, except families are grouped together. */
  order: number;
  past_abilities: PastAbility[];
  /** A list of details showing types this Pokemon had in previous generations */
  past_types: PastType[];
  /** The species this Pokemon belongs to. */
  species: NamedAPIResource;
  /** A set of sprites used to depict this Pokemon in the game. A visual representation of the various sprites can be found at <a href='https://github.com/PokeAPI/sprites#sprites'>PokeAPI/sprites</a> */
  sprites: PokemonSprites;
  /** A list of base stat values for this Pokemon. */
  stats: StatElement[];
  /** A list of details showing types this Pokemon has. */
  types: PokemonType[];
  /** The weight of this Pokemon in hectograms. */
  weight: number;
  [property: string]: any;
}

interface PokemonAbility {
  /** The ability the Pokemon may have. */
  ability: NamedAPIResource;
  /** Whether or not this is a hidden ability. */
  is_hidden: boolean;
  /** The slot this ability occupies in this Pokemon species. */
  slot: number;
  [property: string]: any;
}

interface Cries {
  latest: string;
  legacy: null | string;
  [property: string]: any;
}

interface HeldItem {
  item: NamedAPIResource;
  version_details: RarityVersion[];
  [property: string]: any;
}

interface MoveElement {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
  [property: string]: any;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  [property: string]: any;
}

interface PastAbility {
  abilities: PastAbilityAbility[];
  generation: NamedAPIResource;
  [property: string]: any;
}

interface PastAbilityAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
  [property: string]: any;
}

interface PastType {
  generation: NamedAPIResource;
  types: PastTypeType[];
  [property: string]: any;
}

interface PastTypeType {
  slot: number;
  type: NamedAPIResource;
  [property: string]: any;
}

interface PokemonSprites {
  /** The default depiction of this Pokemon from the back in battle. */
  back_default: null | string;
  /** The female depiction of this Pokemon from the back in battle. */
  back_female: null | string;
  /** The shiny depiction of this Pokemon from the back in battle. */
  back_shiny: null | string;
  /** The shiny female depiction of this Pokemon from the back in battle. */
  back_shiny_female: null | string;
  /** The default depiction of this Pokemon from the front in battle. */
  front_default: null | string;
  /** The female depiction of this Pokemon from the front in battle. */
  front_female: null | string;
  /** The shiny depiction of this Pokemon from the front in battle. */
  front_shiny: null | string;
  /** The shiny female depiction of this Pokemon from the front in battle. */
  front_shiny_female: null | string;
  other: Other;
  versions: SpriteVersions;
  [property: string]: any;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Showdown;
  [property: string]: any;
}

interface DreamWorld {
  front_default: null | string;
  front_female: null | string;
  [property: string]: any;
}

interface Home {
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  [property: string]: any;
}

interface OfficialArtwork {
  front_default: null | string;
  front_shiny: null | string;
  [property: string]: any;
}

interface Showdown {
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null;
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  [property: string]: any;
}

interface SpriteVersions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": GenerationVi;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
  [property: string]: any;
}

interface GenerationI {
  "red-blue": GenerationISprite;
  yellow: GenerationISprite;
  [property: string]: any;
}

interface GenerationISprite {
  back_default: null | string;
  back_gray: null | string;
  back_transparent: null | string;
  front_default: null | string;
  front_gray: null | string;
  front_transparent: null | string;
  [property: string]: any;
}

interface GenerationIi {
  crystal: GenerationIiSpriteExtra;
  gold: GenerationIiSprite;
  silver: GenerationIiSprite;
  [property: string]: any;
}

interface GenerationIiSpriteExtra {
  back_default: null | string;
  back_shiny: null | string;
  back_shiny_transparent: null | string;
  back_transparent: null | string;
  front_default: null | string;
  front_shiny: null | string;
  front_shiny_transparent: null | string;
  front_transparent: null | string;
  [property: string]: any;
}

interface GenerationIiSprite {
  back_default: null | string;
  back_shiny: null | string;
  front_default: null | string;
  front_shiny: null | string;
  front_transparent: null | string;
  [property: string]: any;
}

interface GenerationIii {
  emerald: GenerationIiiSpriteBasic;
  "firered-leafgreen": GenerationIiiSprite;
  "ruby-sapphire": GenerationIiiSprite;
  [property: string]: any;
}

interface GenerationIiiSpriteBasic {
  front_default: null | string;
  front_shiny: null | string;
  [property: string]: any;
}

interface GenerationIiiSprite {
  back_default: null | string;
  back_shiny: null | string;
  front_default: null | string;
  front_shiny: null | string;
  [property: string]: any;
}

interface GenerationIv {
  "diamond-pearl": GenerationIvSprite;
  "heartgold-soulsilver": GenerationIvSprite;
  platinum: GenerationIvSprite;
  [property: string]: any;
}

interface GenerationIvSprite {
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null | string;
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  [property: string]: any;
}

interface GenerationV {
  "black-white": GenerationVSprite;
  [property: string]: any;
}

interface GenerationVSprite {
  animated: Animated;
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null | string;
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  [property: string]: any;
}

interface Animated {
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null | string;
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  [property: string]: any;
}

interface GenerationVi {
  "omegaruby-alphasapphire": GenerationViSprite;
  "x-y": GenerationViSprite;
  [property: string]: any;
}

interface GenerationViSprite {
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  [property: string]: any;
}
interface GenerationVii {
  icons: GenerationViiIcons;
  "ultra-sun-ultra-moon": GenerationViiSprite;
  [property: string]: any;
}

interface GenerationViiIcons {
  front_default: null | string;
  front_female: null | string;
  [property: string]: any;
}

interface GenerationViiSprite {
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  [property: string]: any;
}

interface GenerationViii {
  icons: GenerationViiiIcons;
  [property: string]: any;
}

interface GenerationViiiIcons {
  front_default: null | string;
  front_female: null | string;
  [property: string]: any;
}

interface StatElement {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
  [property: string]: any;
}

interface PokemonType {
  /** The order the Pokemon's types are listed in. */
  slot: number;
  /** The type the referenced Pokemon has. */
  type: NamedAPIResource;
  [property: string]: any;
}
