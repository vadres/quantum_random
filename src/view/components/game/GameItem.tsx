import React from 'react';

import { GameModelItem } from '@/view/viewModels/GameModel';
import { GameItemSC } from './styles';

export interface GameProps {
  item: GameModelItem
}
 
const GameItem: React.FC<GameProps> = ({ item }) => {
  return (
    <GameItemSC className={`bg-${item.category}`}>
      {item.value}
    </GameItemSC>
  );
}
 
export default GameItem;