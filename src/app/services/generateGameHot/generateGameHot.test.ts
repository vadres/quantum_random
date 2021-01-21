import { GenerateGame } from "@/domain/usecases/generateGame"
import { GenerateGameHot } from '@/app/services/generateGameHot/generateGameHot'
import { Category, Game, GameItem } from "@/domain/entities/Game";

const mockGameItems = () => {
  const cat = [ Category.class1, Category.class2,Category.class3,Category.class4,Category.class5, ]
  
  const items: GameItem[] = []
  for (let i =1; i < 61; i++){
    items.push({
      value: i,
      category: cat[Math.trunc(Math.random() * 4)]
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
  const generateGame: GenerateGame = new GenerateGameHot(mockGameItems()); 
  const games: Game[] = await generateGame.exec();
  global.games = games;
})

describe('generate hot game', () => {
  test('size of the games should be 1', async () =>{
    expect((global.games).length).toBe(1);
  });

  test('size of the each game should be 6', async () =>{
    expect(isAllSize6(global.games)).toBeTruthy();
  });

  test('numbers should be distincts', async () => {
    expect(isAllDistinct(global.games)).toBeTruthy();
  });

})