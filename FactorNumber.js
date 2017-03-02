function factorNum(maxNum){
  var divisor = 1;
  var number = maxNum;
  var left = [];
  var right = [];
  while(divisor < number){
    if(number % divisor == 0){
      //check if the two are equal to avoid duplication;
      number = maxNum/divisor;
      if(number === divisor){
        left.push(divisor);
      }else{
        //push values to the array
        left.push(divisor);
        //arr.splice(index, 0, item); will insert item into arr at the
        //specified index (deleting 0 items first, that is, it's just an insert).
        right.splice(0,0,number);
      }
    }
    divisor++;
  }
  return left.concat(right);
}

document.write(factorNum(1020));
