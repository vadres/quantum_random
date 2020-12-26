import { Category } from "@/domain/entities/Game";

export interface Categorizer {
  exec: (value: number) => Category
}