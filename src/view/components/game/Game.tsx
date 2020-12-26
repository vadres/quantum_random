import React from 'react';

import { GameModel } from '@/view/viewModels/GameModel';
import GameItem from './GameItem';

export interface GameProps {
  game: GameModel
}
 
const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <div>
      {game.items.map(el => (
        <GameItem item={el} />
      ))}
    </div>
  );
}
 
export default Game;