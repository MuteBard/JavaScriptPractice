var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function SortPrices(products){
  var sortedList = products.sort(function(a,b){
    if (a.price > b.price){
      return 1;
    }else if (a.price < b.price){
      return -1;
    }else{
      return 0;
    }
  });
  return sortedList;
}
console.log(SortPrices(products));
