
var words = ['Hello','and','goodbye'];
var separator = " ";



//the order of function currentValue and word within function is critical
//currentValue will contain our updating value and parameters within the
//place of word will be critical in supplying values

//the function takes in a parameter of an array and a name and starts with an
//empty string to begin additions ''


//if the value of currentValue is empty, this means we are at the beginning of
//the iterations of reduce. therefore, return just the name. Otherwise, return
//a growing string of currentValue of where the name keeps getting added
//to the end of the string by name

//VERSION 1
var string1 = words.reduce(function(currentValue, word){
  if (currentValue === ''){
    return word;
  }else{
    return currentValue + separator + word;
  }
},'');


//VERSION 2
function merge(currentValue, word){
  if (currentValue === ''){
    return word;
  }else{
    return currentValue + separator + word;
  }
}

var string2 = words.reduce(merge,'');


console.log(string1);
console.log(string2);
