
function counter(count){
  function core(){
    count++;
    return count
  }return core;
}

var count1 = counter(4);

console.log("counter 1 is at "+count1())
console.log("counter 1 is at "+count1())
console.log("counter 1 is at "+count1())

/*
counter 1 is at 5
counter 1 is at 6
counter 1 is at 7
*/
