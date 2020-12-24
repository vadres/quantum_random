import { GenerateGame } from "@/domain/usecases/generateGame"
import { GenerateGameRandom } from '@/app/services/generateGameRandom/generateGameRandom'
import { Game, Item } from "@/domain/entities/Game";
import { NextIntQRNGAdapter } from "@/infra/adapters/nextIntQRNG";

const isAllDistinct = (arr: Item[]) => (new Set(arr)).size === arr.length

describe('generate random game', () => {
  
  
  test('size of the game should be 6', async () =>{
    const generateGame: GenerateGame = new GenerateGameRandom(new NextIntQRNGAdapter()); 
    const game: Game = await generateGame.exec();
    const items: Item[] = game.items()

    expect((items).length).toBe(6);
  });

  test('numbers should be distincts', async () => {
    const generateGame: GenerateGame = new GenerateGameRandom(new NextIntQRNGAdapter()); 
    const game: Game = await generateGame.exec();
    const items: Item[] = game.items()

    expect(isAllDistinct(items)).toBeTruthy();
  })
})