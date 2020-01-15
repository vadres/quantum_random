import qrand from "qrand";
import fn from "./fnData";

var count = 0
var games = [[]];
var index = 0;
const timer = () => {
  if (count % 2 === 0) {
    console.log('..');
    console.log(`Iteration ${count}`);
  } else  {
    console.log('...');
    console.log(`Iteration ${count}`);
  }  
 
  qrand.getRandomHexOctets(5, (err, octets) => {
    const oct = octets.map((val, i) => (
      parseInt(val, 16)
    )).join("");  
      
    var val = (oct % 60) + 1;
        
    if (games[index].length >= 6) {
      if (!fn.searchGame(games[index])) {
        games[index] = []; 
      } else { 
        index++;
      }
      games[index] = []; 
    }

    games[index].push(val);

    if (count < 10){
      count++;
      setTimeout(timer, 10);
      console.clear();
    } else {
      var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(games));
      var content = document.getElementById('content');
      var node = document.createElement('a');//'<a href="data:' + data + '" download="data.json">download JSON</a>');
      node.href = `data:${data}`;
      node.setAttribute('download', 'data.json');
      node.innerHTML = "Donwload JSON";
      content.appendChild(node);
    }
  });
}

timer();