var qrand = require("qrand");

const numberFromHex = (octets) => {
  const oct = octets.map((val, i) => (
    (parseInt(val, 16) % 60) + 1
  ));  
  const gamr = []
  for (let i = 0; i < 9; i++){
    gamr.push( oct.slice(i * 6, (i * 6) + 6) );
  }
  return gamr
}

qrand.getRandomHexOctets(54, (err, octets) => {
  console.log(octets);
  console.log(numberFromHex(octets));
})