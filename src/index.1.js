var qrand = require("qrand");

const numberFromHex = (octets) => {
  const oct = octets.map((val, i) => {
    let real_val = parseInt(val, 16);
    return (real_val % 60);
  });  
  const gamr = [ ...Array(60).keys() ].map(el => 0);
  
  for (let i = 0; i < oct.length; i++)
    gamr[ oct[i] ]++
     
  return gamr
}

qrand.getRandomHexOctets(10000, (err, octets) => {
  console.log(octets);
  console.log(numberFromHex(octets));
})