import { Categorizer } from "@/domain/usecases/categorizer";
import { Category } from "@/domain/entities/Game";

export class CategorizerJson implements Categorizer {
  constructor(
    private readonly data: number[][]
  ){}

  exec(value: number): Category {
    const temp = new Array(60).fill(0);

    for (let game of this.data) {
      for (let num of game) {
        temp[num]++
      }
    }
    
    for (const [v, sum] of Object.entries(temp)) {
      if (value == parseInt(v)) {
        return this.getCategory(sum)    
      }
    }

    return Category.none
  }

  private getCategory(value: number): Category {
    const howToDecrease = Math.trunc(this.data.length / 4); 

    if (value > this.data.length - (howToDecrease)) {
      return Category.hot
    } else if (value > this.data.length - (howToDecrease * 2)) {
      return Category.halfHot
    } else if (value > this.data.length - (howToDecrease * 3)) {
      return Category.halfCold
    } else if (value > this.data.length - (howToDecrease * 4)) {
      return Category.cold
    } else {
      return Category.none
    }
  }
}