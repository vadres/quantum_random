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

  async exec(): Promise<Game[]> {
    const games: Game[] = [];
  
    const valueArr: number[] = await this.nextInt.exec()
    
    for (let u = 0; u < 5; u++) {
      const game = new Game([]);

      for (let i = 0; i < 6; i++){
        let item: GameItem = this.getItem(0)

        while (valueArr.length) {
          let value: number = valueArr.pop() || 0;
          
          if (!game.checkHasValue(value | 1)) {
            item = this.getItem(value)
            break;
          }
        }
        
        game.items().push(item)
      }

      games.push(game);
    }

    return games;
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