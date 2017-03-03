

//---------------------1-----------------------

var arr1 = [23, 34, -3, 2, -95, -2, 4, 51, 24]

var getPositives = function(n){
  if (n > 0){
    return n;
  }
}

var positives1 = arr1.filter(getPositives);

//---------------------2-----------------------

var arr2 = [-3,-2,-1,0,1,2,3]

var positives2 = arr2.filter(function(n){
  if (n > 0){
    return n;
  }
});


console.log(positives1);
console.log(positives2);
/*
[ 23, 34, 2, 4, 51, 24 ]
[ 1, 2, 3 ]
*/  
