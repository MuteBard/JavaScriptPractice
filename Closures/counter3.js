
function counter(count){
  function increment(){
    count++;
    return count
  }

  function decrement(){
    count--;
    return count
  }

return{
  Increment :increment,
  Decrement :decrement
}


}

var count = counter(4);
//very interesting
console.log("counter 1 is at "+count.Increment())
console.log("counter 1 is at "+count.Increment())
console.log("counter 1 is at "+count.Increment())
console.log("counter 1 is at "+count.Increment())
console.log("counter 1 is at "+count.Decrement())
console.log("counter 1 is at "+count.Decrement())
console.log("counter 1 is at "+count.Increment())
console.log("counter 1 is at "+count.Increment())
/*
counter 1 is at 5
counter 1 is at 6
counter 1 is at 7
counter 1 is at 8
counter 1 is at 7
counter 1 is at 6
counter 1 is at 7
counter 1 is at 8
*/
