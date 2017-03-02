function printSquare(stars){
  var string = "";
  var rows = stars;

//create number of stars
  for(var i = 0; i < stars; i++){
    string += "*";
  }
  string = string+"<br>";

//create number of rows
  for(var i = 0; i < rows; i++){
    document.write(string);
  }

}

printSquare(5);
