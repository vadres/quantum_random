import React, { useEffect, useState } from 'react';
import { 
  Main, 
  Section,
  Title
} from '@/view/pages/styles';

import Game from '@/view/components/game/Game';
import GameItem from '@/view/components/game/GameItem';
import { GenerateGame } from '@/domain/usecases/generateGame';
import { Game as GameEntity } from '@/domain/entities/Game';

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
  const [ rgame, setRgame ] = useState<GameEntity>(new GameEntity([]));
  const [ rgame2, setRgame2 ] = useState<GameEntity>(new GameEntity([]));
  const [ rgame3, setRgame3 ] = useState<GameEntity>(new GameEntity([]));
  const [ rgame4, setRgame4 ] = useState<GameEntity>(new GameEntity([]));
  const [ rgame5, setRgame5 ] = useState<GameEntity>(new GameEntity([]));
  
  const findRandom = async () => {
    const games: GameEntity[] = await genGameRandom.exec()
    setRgame(games[0])
    setRgame2(games[1])
    setRgame3(games[2])
    setRgame4(games[3])
    setRgame5(games[4])
  }

  useEffect(() => {
    findRandom()
  }, [ genGameRandom ])


  return (
    <Main>
      <Section>
        <Title>Jogos Aleatórios</Title>
        <Game game={rgame} />
        <Game game={rgame2} />
        <Game game={rgame3} />
        <Game game={rgame4} />
        <Game game={rgame5} />
      </Section>
    </Main>
  );
}
 
export default Home;