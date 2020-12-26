export class Game {
  constructor(
    private readonly _items: GameItem[]
  ){}

  size(): number {
    return this.items.length;
  }

  items(): GameItem[] {
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
  class0,
  class1,
  class2,
  class3,
  class4,
  class5,
  class6,
  class7,
  class8,
  class9,
  class10,
  class11,
  class12,
  class13,
  class14,
  class15,
};

export type GameItem = {
  category: Category
  value: number
};