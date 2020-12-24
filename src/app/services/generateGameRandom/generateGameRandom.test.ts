import { GenerateGame } from "@/domain/usecases/generateGame"
import { GenerateGameRandom } from '@/app/services/generateGameRandom/generateGameRandom'
import { Game, Item } from "@/domain/entities/Game";
import { NextIntQRNGAdapter } from "@/infra/adapters/nextIntQRNG/nextIntQRNG";

const isAllDistinct = (arr: Item[]) => (new Set(arr)).size === arr.length

declare global {
  namespace NodeJS {
    interface Global {
       items: Item[]
    } 
  }
}

beforeAll(async () => {
  const generateGame: GenerateGame = new GenerateGameRandom(new NextIntQRNGAdapter()); 
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