import qrand from "qrand";
import fn from "./fnData";

const numberFromHex = (octets) => {
  const oct = octets.map((val, i) => (
    (parseInt(val, 16) % 60) + 1
  ));  
  const gamr = []
  for (let i = 0; gamr.length < 9 || i < 167; i++){
    const game = oct.slice(i * 6, (i * 6) + 6);
    if (fn.searchCount(game) && !fn.searchGame(game))
      gamr.push( game );
  }
  return gamr
}

qrand.getRandomHexOctets(1000, (err, octets) => {
  console.log(octets);
  console.log(numberFromHex(octets));
})
