var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

//VERSION 1
function total2(array){
  var sum = array.reduce(function(currValue,product){
    return currValue + product.price;
  },0);
  return sum;
}


//VERSION 2
function total1(array){
  function combine(currValue,product){
   return currValue + product.price;
  }

  var sum = array.reduce(combine,0);
  return sum;
}

//by calling a function called total, you can indicate which list of products you would like to enter
// by just entering it within the parameters.
console.log(total1(products));
console.log(total2(products));
