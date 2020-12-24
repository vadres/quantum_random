import { Categorizer } from "@/app/contracts/categorizer";
import { NextInt } from "@/app/contracts/nextInt";
import { Game, Item, Category } from "@/domain/entities/Game";
import { GenerateGame } from "@/domain/usecases/generateGame";

export class GenerateGameRandom implements GenerateGame {
  constructor(
    private readonly nextInt: NextInt,
    private readonly categorizer: Categorizer
  ){}

  async exec(): Promise<Game> {
    const game: Game = new Game([]);
  
    for (let i = 0; i < 6; i++){
      let item: Item = { value: 0, category: 0 };
      const valueArr: number[] = await this.nextInt.exec()

      for(let value of valueArr) {
        if (!game.checkHasValue(value)) {
          const category: Category = this.categorizer.exec(value)
      
          item = {
            value,
            category
          };

          break;
        }
      }
      
      game.items().push(item)
    }

    return game;
  }
}