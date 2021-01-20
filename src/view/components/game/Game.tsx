import React from 'react';

import { Game as GameEntity, GameItem as GameItemEntity } from '@/domain/entities/Game';
import GameItem from './GameItem';
import { GameSC } from './styles';

export interface GameProps {
  game?: GameEntity
}
 
const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <GameSC>
      {game?.items().map((el: GameItemEntity) => (
        <GameItem item={el} />
      ))}
    </GameSC>
  );
}
 
export default Game;