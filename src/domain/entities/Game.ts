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
  class0 = "class-0",
  class1 = "class-1",
  class2 = "class-2",
  class3 = "class-3",
  class4 = "class-4",
  class5 = "class-5",
};

export type GameItem = {
  category: Category
  value: number
};