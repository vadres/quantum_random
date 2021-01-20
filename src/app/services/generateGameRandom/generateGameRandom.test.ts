import { GenerateGame } from "@/domain/usecases/generateGame"
import { GenerateGameRandom } from '@/app/services/generateGameRandom/generateGameRandom'
import { Category, Game, GameItem } from "@/domain/entities/Game";
import { NextIntQRNGAdapter } from "@/infra/adapters/nextIntQRNG/nextIntQRNG";
import { Categorizer } from "@/domain/usecases/categorizer";
import { CategorizerJson } from "../categorizerJson/categorizerJson";

const mockGameItems = () => {
  const items: GameItem[] = []
  for (let i =1; i < 61; i++){
    items.push({
      value: i,
      category: Category.class0
    })
  }

  return items;
}

const isAllSize6 = (arr: Game[]) => {
  for (let game of arr) {
    if (game.items().length !== 6) {
      return false
    }
  }

  return true;
}

const isAllDistinct = (arr: Game[]) => {
  for (let game of arr) {
    const arrprimitive = game.items().map(item => item.value);
    if ((new Set(arrprimitive)).size !== game.items().length) {
      return false
    }
  }

  return true;
}

declare global {
  namespace NodeJS {
    interface Global {
       games: Game[]
    } 
  }
}

beforeAll(async () => {
  const categorizer: Categorizer = new CategorizerJson([]);
  const generateGame: GenerateGame = new GenerateGameRandom(mockGameItems(), new NextIntQRNGAdapter()); 
  const games: Game[] = await generateGame.exec();
  global.games = games;
})

describe('generate random game', () => {
  test('size of the games should be 5', async () =>{
    expect((global.games).length).toBe(5);
  });

  test('size of the each game should be 6', async () =>{
    expect(isAllSize6(global.games)).toBeTruthy();
  });

  test('numbers should be distincts', async () => {
    expect(isAllDistinct(global.games)).toBeTruthy();
  });

})