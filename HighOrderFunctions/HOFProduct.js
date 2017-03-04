var numbers = [3,4,5];

var product = numbers.reduce(function(a, b){
  return a*b;
},1);

console.log(product);
