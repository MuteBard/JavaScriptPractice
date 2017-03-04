
var numbers = [1,2,3,4,5,6,7,8,9,10];

var squareNumbers = numbers.map(function(n){
  return Math.pow(n,2);
});

console.log(squareNumbers);
/*
[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
*/  
