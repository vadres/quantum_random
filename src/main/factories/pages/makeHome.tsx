import React from 'react';

import Home from '@/view/pages/Home';
import { GenerateGameRandom } from '@/app/services/generateGameRandom/generateGameRandom';
import { NextIntQRNGAdapter } from '@/infra/adapters/nextIntQRNG/nextIntQRNG';
import { CategorizerJson } from '@/app/services/categorizerJson/categorizerJson';
import * as json from '@/infra/db/games.json';
import { GenerateGameHot } from '@/app/services/generateGameHot/generateGameHot';
import { GenerateGameCold } from '@/app/services/generateGameCold/generateGameCold';

export const MakeHome: React.FC = () => {
  const categorizer = new CategorizerJson(json.data);

  const nextInt = new NextIntQRNGAdapter();
  const genGameRandom = new GenerateGameRandom(categorizer.exec(), nextInt);
  const genGameHot = new GenerateGameHot(categorizer.exec());
  const genGameCold = new GenerateGameCold(categorizer.exec());

  return (
    <Home
      genGameRandom={genGameRandom}
      genGameHot={genGameHot}
      genGameCold={genGameCold}
    />
  ) 
   
}