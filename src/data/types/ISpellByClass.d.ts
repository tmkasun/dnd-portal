interface ISpellLight {
  index: string;
  name: string;
  url: string;
}

export interface ISpellByClass {
  count: number;
  results: ISpellLight[];
}
