import { Categorizer } from "@/app/contracts/categorizer"
import { Category } from "@/domain/entities/Game";
import { CategorizerJson } from "./categorizerJson"

const isCategory = (c: number): boolean => {
  return c === Category.cold ||
         c === Category.halfCold ||
         c === Category.halfHot ||
         c === Category.hot
}

describe('Categorize values', () => {
  test('the return is a enum category instance', () => {
    const categorizer: Categorizer = new CategorizerJson();
    expect(isCategory(categorizer.exec(5))).toBeTruthy();
  })
})