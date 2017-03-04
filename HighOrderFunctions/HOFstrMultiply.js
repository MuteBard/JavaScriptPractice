

function strMultiply(word,max){
  function range(min,max){
    var array = [];
    for (var i = min; i < max; i++){
      array.push(i);
    }
    console.log(array);
    return array;
  }

  var stringOfWords = range(0,max).map(function(n){
    return word;
  }).reduce(function(currentValue,word){

    console.log(currentValue+word);
    return currentValue+word;
  },"");
  return stringOfWords;
}

var word = "abc";
var number = 7;
console.log(strMultiply(word, number));
