import React from 'react';

import { GameItem } from '@/domain/entities/Game';
import { GameItemSC } from './styles';

export interface GameProps {
  item: GameItem
}
 
const GameItem: React.FC<GameProps> = ({ item }) => {
  return (
    <GameItemSC className={`bg-${item.category}`}>
      {item.value}
    </GameItemSC>
  );
}
 
export default GameItem;