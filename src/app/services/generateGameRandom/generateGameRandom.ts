import { NextInt } from "@/app/contracts/nextInt";
import { Game, GameItem, Category } from "@/domain/entities/Game";
import { GenerateGame } from "@/domain/usecases/generateGame";

export class GenerateGameRandom extends GenerateGame {
  constructor(
    allGameItems: GameItem[],
    private readonly nextInt: NextInt
  ){
    super(allGameItems)
  }

  async exec(): Promise<Game> {
    const game: Game = new Game([]);
  
    for (let i = 0; i < 6; i++){
      let item: GameItem = this.getItem(0)

      const valueArr: number[] = await this.nextInt.exec()

      for(let value of valueArr) {
        if (!game.checkHasValue(value)) {
          item = this.getItem(value)
          break;
        }
      }
      
      game.items().push(item)
    }

    return game;
  }

  private getItem(value: number): GameItem {
    for (let gi of this.allGameItems) {
      if (gi.value === value)
        return gi
    }

    return  {
      value: 0,
      category: Category.class0
    }
  }
}