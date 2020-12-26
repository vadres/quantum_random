import React, { useEffect, useState } from 'react';
import { 
  Main, 
  Section,
  Title
} from '@/view/pages/styles';

import Game from '@/view/components/game/Game';
import GameItem from '@/view/components/game/GameItem';
import { Categorizer } from '@/domain/usecases/categorizer';
import { GenerateGame } from '@/domain/usecases/generateGame';

export interface AppProps {
  genGameRandom: GenerateGame
  genGameCold: GenerateGame
  genGameHot: GenerateGame
}
 
const Home: React.FC<AppProps> = ({
  genGameRandom,
  genGameCold,
  genGameHot,
}) => {
  


  return (
    <Main>
      <Section>
        <Title>Jogo Frio</Title>
        
      </Section>
    </Main>
  );
}
 
export default Home;