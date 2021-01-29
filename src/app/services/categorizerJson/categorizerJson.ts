import { Categorizer } from "@/domain/usecases/categorizer";
import { Category, GameItem } from "@/domain/entities/Game";

export class CategorizerJson implements Categorizer {
  bigger: number
  smaller: number

  constructor(
    private readonly data: number[][]
  ){
    this.bigger = Number.NEGATIVE_INFINITY
    this.smaller = Number.POSITIVE_INFINITY
  }

  exec(): GameItem[] {
    let temp = new Array(60).fill(0);
    const items: GameItem[] = []

    for (let game of this.data) {
      for (let num of game) {
        temp[num - 1]++
      }
    }

    for (let n of temp) {
      if (n > this.bigger)
        this.bigger = n

      if (n < this.smaller)
        this.smaller = n
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
    const howToDecrease: number = (this.bigger - this.smaller) / 5
    
    for (let c = 1; c <= 5; c++) {
      if (value >= this.bigger - (howToDecrease * c)) {
        return Category[`class${c}`]
      }
    }
    
    return Category.class0
  }
}