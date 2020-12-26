import React from 'react';

import Home from '@/view/pages/Home';
import { GenerateGameRandom } from '@/app/services/generateGameRandom/generateGameRandom';
import { NextIntQRNGAdapter } from '@/infra/adapters/nextIntQRNG/nextIntQRNG';
import { CategorizerJson } from '@/app/services/categorizerJson/categorizerJson';
import * as json from '@/infra/db/games.json';

export const MakeHome: React.FC = () => {
  const categorizer = new CategorizerJson(json.data);
  const items = categorizer.exec();

  const nextInt = new NextIntQRNGAdapter();
  const genGameRandom = new GenerateGameRandom(items, nextInt);

  return (
    <Home
      genGameRandom={genGameRandom}
      genGameHot={genGameRandom}
      genGameCold={genGameRandom}
    />
  ) 
   
}