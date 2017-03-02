function printNumbers1(start,end){
  for(var n = start; n <= end; n++){
    document.write(n);
    document.write("<br>");
  }
}

function printNumbers2(start,end){
  var n = start;
  while(n <= end){
    document.write(n);
    document.write("<br>");
    n++;
  }
}

document.write("For loop <br>");
printNumbers1(1,10);
document.write("<br>");
document.write("While loop <br>");
printNumbers2(1,10);
