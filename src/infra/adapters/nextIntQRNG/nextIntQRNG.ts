import fetch from 'node-fetch';
import { NextInt } from "@/app/contracts/nextInt"

const length = 1000

export class NextIntQRNGAdapter implements NextInt {
  uri: string;

  constructor(){
    this.uri = `http://qrng.anu.edu.au/API/jsonI.php?type=hex16&length=${length}&size=3`;
    
  }

  async exec(): Promise<number[]> {
    try 
    {
      
      const res = await fetch(this.uri, {
        method: 'GET'
      });
       
      const json = await res.json();
      const arrHexNum = json.data
      
      const arrDecNum = arrHexNum.map((hexNum: string) => {
        return (parseInt(hexNum, 16)  % 60) + 1;
      });

      return arrDecNum

    } catch (e) 
    {
      throw e;
    }
  }
}