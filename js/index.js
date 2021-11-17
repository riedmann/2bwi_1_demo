var signs = ["!", '"', "§", "$", "%", "&", "/", "(", ")", "=", "", "+", "-"];
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "t",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
anzahl


generate(20);
// comment

function generate(size) {
  console.log("clicked");
  var result = "";
  for (var i = 0; i < size; i++) {
      
    let showLetter = Math.random()>0.5?true: false;
    let sign;
    if (showLetter){
        sign = buchstabe[Math.floor(Math.random() * buchstabe.length)];
    } else {
        sign = Zeichen[Math.floor(Math.random() * Zeichen.length)];
    }
    result += sign;
  }
  console.log(result);
  
}
