function call3Times(fun){
  fun();
  fun();
  fun();
}
//remember that if a function does not return anything, and you attempt to
//print it, likely you will get a undefined value

var hello = call3Times(function(){
  console.log("Hello World");
});
