import qrand from "qrand";
import fn from "./fnData";

const numberFromHex = (octets) => {
  const oct = octets.map((val, i) => (
    (parseInt(val, 16) % 60) + 1
  ));  
  const gamr = []
  for (let i = 0; gamr.length < 9 || i < 167; i++){
    const game = oct.slice(i * 6, (i * 6) + 6);
    if (fn.checkGame(game))
      gamr.push( game );
  }
  return gamr
}

var count = 0
var games = [[]];
var index = 0;
const timer = () => {
  console.log(`--- Iteration - ${count + 1} ---`);
  qrand.getRandomHexOctets(4, (err, octets) => {
    const oct = octets.map((val, i) => (
      parseInt(val, 16)
    )).join("");  
      
    var val = (oct % 60) + 1;
        
    if (games[index].length >= 6) {
      console.log(`--- Game - ${index + 1} ---`);
      index++;
      games[index] = []; 
    }

    games[index].push(val);

    if (count < 54){
      count++;
      setTimeout(timer, 10);
    } else {
      console.log(games);
    }
  });
}

timer();