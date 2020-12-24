export class Game {
  constructor(
    private readonly _items: Item[]
  ){}

  size(): number {
    return this.items.length;
  }

  items(): Item[] {
    return this._items
  }
};

export enum Category {
  cold,
  halfCold,
  halfHot,
  hot
};

export type Item = {
  category: Category
  value: number
};