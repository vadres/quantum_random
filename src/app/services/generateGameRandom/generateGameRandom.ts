import { NextInt } from "@/app/contracts/nextInt";
import { Game, Item, Category } from "@/domain/entities/Game";
import { GenerateGame } from "@/domain/usecases/generateGame";

export class GenerateGameRandom implements GenerateGame {
  constructor(
    private readonly nextInt: NextInt
  ){}

  async exec(): Promise<Game> {
    const game: Game = new Game([]);
    const value = await this.nextInt.exec();
  
    for (let i = 0; i < 6; i++){
      const item: Item = {
        value,
        category: Category.cold
      };

      game.items().push(item)
    }

    return game;
  }
}