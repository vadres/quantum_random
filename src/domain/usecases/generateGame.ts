import { Game, GameItem } from "@/domain/entities/Game";

export abstract class GenerateGame {
  constructor(
    protected readonly allGameItems: GameItem[]
  ) {}

  abstract exec(): Promise<Game> 
}