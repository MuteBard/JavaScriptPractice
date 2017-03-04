function callnTimes(times, fun){
  for (var i = 0 ; i < times ; i++){
    fun();
  }
}

/*
It does not matter if the function in (3,function(x){}) has a number in
x or nothing at all if it is not returning a value or if that value is never
used. If the value is irrelevant to the application of callnTimes such that it
does not affect the return of function(x) then function(x) is no different
from function()
*/

var hello = callnTimes(3,function(){
  console.log("Hello World");
});
