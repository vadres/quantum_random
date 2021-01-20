import React, { useEffect, useState } from 'react';

import { GameItem } from '@/domain/entities/Game';
import { GameItemSC, GameItemContainer } from './styles';

export interface GameProps {
  item: GameItem
}
 
const GameItem: React.FC<GameProps> = ({ item }) => {
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => setVisible(true), Math.random() * 300)

    return () => { clearTimeout(timeout) }
  }, []);

  return (
    <GameItemContainer>
      {
        visible && 
        <GameItemSC className={`bg-${item.category}`}>
          {item.value}
        </GameItemSC>
      }
    </GameItemContainer>
    
  );
}
 
export default GameItem;