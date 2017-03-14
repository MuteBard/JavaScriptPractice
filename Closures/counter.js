
function counter(){
  var count = 0;
  function core(){
    count++;
    return count
  }return core;
}

var count1 = counter();
var count2 = counter();

console.log("counter 1 is at "+count1())
console.log("counter 1 is at "+count1())
console.log("counter 2 is at "+count2())
console.log("counter 2 is at "+count2())
console.log("counter 1 is at "+count1())

/*
counter 1 is at 1
counter 1 is at 2
counter 2 is at 1
counter 2 is at 2
counter 1 is at 3
*/
