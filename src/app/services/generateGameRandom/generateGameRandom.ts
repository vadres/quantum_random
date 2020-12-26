import { NextInt } from "@/app/contracts/nextInt";
import { Game, Item, Category } from "@/domain/entities/Game";
import { GenerateGame } from "@/domain/usecases/generateGame";

export class GenerateGameRandom implements GenerateGame {
  constructor(
    private readonly nextInt: NextInt
  ){}

  async exec(): Promise<Game> {
    const game: Game = new Game([]);
  
    for (let i = 0; i < 6; i++){
      let item: Item = { value: 0, category: Category.none  };
      const valueArr: number[] = await this.nextInt.exec()

      for(let value of valueArr) {
        if (!game.checkHasValue(value)) {
          item = {
            value,
            category: Category.none 
          };

          break;
        }
      }
      
      game.items().push(item)
    }

    return game;
  }
}