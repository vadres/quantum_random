import { Categorizer } from "@/domain/usecases/categorizer"
import { Category, GameItem } from "@/domain/entities/Game"
import { CategorizerJson } from "./categorizerJson"
import * as json from '@/infra/db/games.json'

const hasClass0 = (items: GameItem[]): boolean => {
  for (let item of items) {
    if (item.category === Category.class0)
      return true;
  }
  return false;
}

describe('Categorize values', () => {
  test('the return has 60 items', () => {
    const categorizer: Categorizer = new CategorizerJson([]);
    expect(categorizer.exec().length).toBe(60);
  })

  test('the return hasn\'t class0 items', () => {
    const categorizer: Categorizer = new CategorizerJson(json['data']);
    const items = categorizer.exec();
    expect(hasClass0(items)).toBeFalsy();
  })
})