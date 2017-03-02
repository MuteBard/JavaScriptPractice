
function createAlphabet(){
  var i = 65;
  var alphabet = [];

  while(i <= 122){
    if(i <= 90 || i >= 97 && i <= 122 ){
      alphabet.push(String.fromCharCode(i));
    i++;
    }
  }
  return alphabet;
}


//65 to 90 for cap
//97 to 122 for low
//anything else must stay the same

document.write(alphabet);
