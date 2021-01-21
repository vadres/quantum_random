import { Game, GameItem, Category } from "@/domain/entities/Game";
import { GenerateGame } from "@/domain/usecases/generateGame";

const sort = (items: GameItem[]): GameItem[] => {
  return items.sort((a, b) => {
    const an = parseInt(a.category.split("-")[1])
    const bn = parseInt(b.category.split("-")[1])

    return an - bn
  })
}

export class GenerateGameHot extends GenerateGame {
  constructor(
    allGameItems: GameItem[]
  ){
    super(sort(allGameItems))
  }

  async exec(): Promise<Game[]> {
    const games: Game[] = [];
    
    const game = new Game([])

    const gamesshufle = this.allGameItems.slice(0, 30).sort(() => .5 - Math.random())   

    for (let i = 0; i < 6; i++) {
      game.items().push(gamesshufle[i])
    }
    games.push(game);
    return games;
  }
}