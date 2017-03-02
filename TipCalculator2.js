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

function totalAmount(tipAmount, service){
  var bill;
  if(service === "bad"){
    bill = (tipAmount/.1) + tipAmount;
    return bill;
  }else if(service === "fair"){
    bill = (tipAmount/.15) + tipAmount;
    return bill;
  }else if(service === "good"){
    bill = (tipAmount/.2) + tipAmount;
    return bill;
  }
}
//the html waits until the script is completely finished before it prints to the page
//this is why the first three do not appear untill the third one is completely done


var tip = tipAmount(120, "good");
document.write(totalAmount(tip, "good"));
document.write("<br>");


/*
document.write(tipAmount(100, "dajkhfkajhlkahsk"));
document.write("<br>");
*/
