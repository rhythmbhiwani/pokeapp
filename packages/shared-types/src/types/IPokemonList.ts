export interface IPokemonList {
  count: number;
  next: any;
  previous: any;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}
