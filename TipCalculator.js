function tipAmount(bill, service){
  var tipPercent;

  while(true){
    if(service === "bad"){
      tipPercent = bill * 0.1;
      return tipPercent;
    }else if(service === "fair"){
      tipPercent = bill * 0.15;
      return tipPercent;
    }else if(service === "good"){
      tipPercent = bill * 0.2;
      return tipPercent;
    }else {
      console.log("That service level is not one of the options");
      var service =  prompt("Enter a valid service level: ");

    }
  }
}
//the html waits until the script is completely finished before it prints to the page
//this is why the first three do not appear untill the third one is completely done
document.write(tipAmount(100, "bad"));
document.write("<br>");
document.write(tipAmount(100, "fair"));
document.write("<br>");
document.write(tipAmount(100, "good"));
document.write("<br>");
/*
document.write(tipAmount(100, "dajkhfkajhlkahsk"));
document.write("<br>");
*/
