import fetch from 'node-fetch';
import { NextInt } from "@/app/contracts/nextInt"

export class NextIntQRNGAdapter implements NextInt {
  uri: string;

  constructor(){
    this.uri = `http://qrng.anu.edu.au/API/jsonI.php?type=`;
    
  }

  async exec(): Promise<number> {
    try 
    {
      
      const res = await fetch(this.uri, {
        method: 'GET'
      })

      const num = await res.text();
      
      return parseInt(num, 16);

    } catch (e) 
    {
      throw e;
    }
  }
}