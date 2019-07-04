var qrand = require("qrand");
import fn from "./fnData";

const numberFromHex = (octets) => {
  const oct = octets.map((val, i) => (
    (parseInt(val, 16) % 60) + 1
  ));  
  const gamr = []
  for (let i = 0; i < 9; i++){
    let game = oct.slice(i * 6, (i * 6) + 6);
    if (fn.searchGame(game)){
      const a1 = oct.slice(i*6, (i * 6) + 16).sort(function() {
        return .5 - Math.random();
      }); 
      game = a1.slice(0, 6);
    }
    gamr.push( game );
  }
  return gamr
}

qrand.getRandomHexOctets(54, (err, octets) => {
  console.log(octets);
  console.log(numberFromHex(octets));
})