import { Categorizer } from "@/app/contracts/categorizer";
import { Category } from "@/domain/entities/Game";

export class CategorizerJson implements Categorizer {
  exec(value: number): Category {
    return Category.cold;
  }
}