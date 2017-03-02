
function printBanner(string){
  var num = string.length-1;
  var stars = "";
  for(var i = 0;i < num; i++){
    stars+="*";
  }

  stars += "<br>";
  string = "*"+string+"\xa0*<br>";

  document.write(stars+string+stars);
}


printBanner("Welcome to DigitalCrafts");
