import { Game } from "@/domain/entities/Game";

export interface GenerateGame {
  exec: () => Promise<Game> 
}