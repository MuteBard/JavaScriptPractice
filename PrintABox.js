function printBox(width, height){
  var topbottom = "";
  var center = "";

//create number of stars
  for(var i = 0; i < width; i++){
    topbottom += "*";
    if(i < width-2){
      center +="\xa0\xa0";
    }
  }

  topbottom = topbottom+"<br>";
  center = "*"+center+"*<br>";

//create number of rows
document.write(topbottom);
  for(var i = 0; i < height-2; i++){
    document.write(center);
  }
document.write(topbottom);

}

printBox(6,4);
