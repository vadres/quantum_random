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

  checkHasValue(value: number): boolean {
    for (let item of this._items){
      if (item.value === value) {
        return true;
      }
    }
    return false;
  }
};

export enum Category {
  none,
  cold,
  halfCold,
  halfHot,
  hot
};

export type Item = {
  category: Category
  value: number
};