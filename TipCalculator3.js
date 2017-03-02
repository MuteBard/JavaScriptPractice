
function splitAmount(bill,service,people){
  var splitBill;
  if(service === "bad"){
    splitBill = (bill * 1.1)/people;
    return splitBill;
  }else if(service === "fair"){
    splitBill = (bill * 1.15)/people;
    return splitBill;
  }else if(service === "good"){
    splitBill = (bill * 1.2)/people;
    return splitBill;
  }
}

//the html waits until the script is completely finished before it prints to the page
//this is why the first three do not appear untill the third one is completely done

document.write(splitAmount(100,"good", 5));
document.write("<br>");
document.write(splitAmount(40,"fair", 2));
