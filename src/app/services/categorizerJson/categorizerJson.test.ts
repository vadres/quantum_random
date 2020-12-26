import { Categorizer } from "@/domain/usecases/categorizer"
import { Category } from "@/domain/entities/Game"
import { CategorizerJson } from "./categorizerJson"
import * as json from '@/infra/db/games.json'

const isCategory = (c: number): boolean => {
  return c === Category.none ||
         c === Category.cold ||
         c === Category.halfCold ||
         c === Category.halfHot ||
         c === Category.hot
}

describe('Categorize values', () => {
  test('the return is a enum category instance', () => {
    const categorizer: Categorizer = new CategorizerJson([]);
    expect(isCategory(categorizer.exec(5))).toBeTruthy();
  })

  test('the return not is a "none" category', () => {
    const categorizer: Categorizer = new CategorizerJson(json['data']);
    expect(categorizer.exec(5) !== Category.none).toBeTruthy();
  })
})