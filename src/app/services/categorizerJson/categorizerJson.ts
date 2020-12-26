import { Categorizer } from "@/domain/usecases/categorizer";
import { Category, GameItem } from "@/domain/entities/Game";

export class CategorizerJson implements Categorizer {
  constructor(
    private readonly data: number[][]
  ){}

  exec(): GameItem[] {
    let temp = new Array(60).fill(0);
    const items: GameItem[] = []

    for (let game of this.data) {
      for (let num of game) {
        temp[num - 1]++
      }
    }
    for (const [v, sum] of Object.entries(temp)) {
      items.push({
        value: parseInt(v) + 1,
        category: this.getCategory(sum)    
      })
    }

    return items;
  }

  private getCategory(value: number): Category {
    const normSize = this.data.length / 6;
    const howToDecrease = Math.trunc(normSize / 15); 
    
    for (let c = 1; c <= 15; c++) {
      if (value > (normSize - (howToDecrease * c))) {
        return Category[`class${c}`]
      }
    }
    
    return Category.class0
  }
}