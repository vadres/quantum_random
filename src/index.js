import qrand from "qrand";
import fn from "./fnData";

var count = 0
var games = [[]];
var index = 0;
const timer = () => {
  console.log(`--- Iteration - ${count + 1} ---`);
 
  qrand.getRandomHexOctets(5, (err, octets) => {
    const oct = octets.map((val, i) => (
      parseInt(val, 16)
    )).join("");  
      
    var val = (oct % 60) + 1;
        
    if (games[index].length >= 6) {
      if (!fn.searchGame(games[index])) {
        games[index] = []; 
      }
      index++;
      games[index] = []; 
    }

    games[index].push(val);

    if (count < 1199){
      count++;
      setTimeout(timer, 10);
    } else {
      console.log(games);
    }
  });
}

timer();