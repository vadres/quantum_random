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

const isAllDistinct = (arr: GameItem[]) => {
  const arrprimitive = arr.map(item => item.value);
  return (new Set(arrprimitive)).size === arr.length
}
declare global {
  namespace NodeJS {
    interface Global {
       items: GameItem[]
    } 
  }
}

beforeAll(async () => {
  const categorizer: Categorizer = new CategorizerJson([]);
  const generateGame: GenerateGame = new GenerateGameRandom(mockGameItems(), new NextIntQRNGAdapter()); 
  const game: Game = await generateGame.exec();
  global.items = game.items();
})

describe('generate random game', () => {
  test('size of the game should be 6', async () =>{
    expect((global.items).length).toBe(6);
  });

  test('numbers should be distincts', async () => {
    expect(isAllDistinct(global.items)).toBeTruthy();
  });

})