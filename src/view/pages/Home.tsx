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
import ReloadButton from '../components/reloadButton/ReloadButton';

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
  const [ gameHot, setGameHot ] = useState(new GameEntity([]));
  const [ gameCold, setGameCold ] = useState(new GameEntity([]));
  const [ rgame, setRgame ] = useState(new GameEntity([]));
  const [ rgame2, setRgame2 ] = useState(new GameEntity([]));
  const [ rgame3, setRgame3 ] = useState(new GameEntity([]));
  const [ rgame4, setRgame4 ] = useState(new GameEntity([]));
  const [ rgame5, setRgame5 ] = useState(new GameEntity([]));
  
  const findRandom = async () => {
    const gamesHot: GameEntity[] = await genGameHot.exec()
    const gamesCold: GameEntity[] = await genGameCold.exec()
    const games: GameEntity[] = await genGameRandom.exec()

     
    setGameHot(gamesHot[0]);
    setGameCold(gamesCold[0]);

    setRgame(games[0])

    setTimeout(() => {
      setRgame2(games[1])
    }, 400)

    setTimeout(() => {
      setRgame3(games[2])
    }, 800)
    
    setTimeout(() => {
      setRgame4(games[3])
    }, 1200)

    setTimeout(() => {
      setRgame5(games[4])
    }, 1600)
  }

  const reset = () => {
    setGameHot(new GameEntity([]));
    setGameCold(new GameEntity([]));
    setRgame(new GameEntity([]))
    setRgame2(new GameEntity([]))
    setRgame3(new GameEntity([]))
    setRgame4(new GameEntity([]))
    setRgame5(new GameEntity([]))

    findRandom();
  }

  const [ reload, setReload ] = useState("")
 
  useEffect(() => {
    findRandom()
  }, [ genGameRandom ])


  return (
    <Main>
      <div>
        <Section>
          <Title>Jogo Quente</Title>
          <div style={{ height: 50 }}>
            <Game game={gameHot} />
          </div>
        </Section>
        <Section>
          <Title>Jogo Frio</Title>
          <div style={{ height: 50 }}>
            <Game game={gameCold} />
          </div>
        </Section>
      </div>

      <Section>
        <Title>Jogos Aleatórios</Title>
        <div style={{ height: 300 }}>
          <Game game={rgame} />
          <Game game={rgame2} />
          <Game game={rgame3} />
          <Game game={rgame4} />
          <Game game={rgame5} />
        </div>
      </Section>
      
      <ReloadButton onClick={() => reset()} />
    </Main>
  );
}
 
export default Home;