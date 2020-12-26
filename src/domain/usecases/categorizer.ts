import { GameItem } from "@/domain/entities/Game";

export interface Categorizer {
  exec: () => GameItem[]
}