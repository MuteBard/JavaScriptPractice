

var numbers = [1,2,3,4,5,6,7,8,9,10];

var evenNumbers = numbers.filter(function(n){
  if(n%2==0){
    return n;
  }
});

console.log(evenNumbers);
/*
[ 2, 4, 6, 8, 10 ]
*/
