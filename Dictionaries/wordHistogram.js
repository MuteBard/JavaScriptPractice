

function removePunctuation(wordArray){
  for(var index = 0; index < wordArray.length; index++){

    //retrive the first and last character of string
    var firstCharCode = wordArray[index].charCodeAt(0);
    var lastCharCode = wordArray[index].charCodeAt(wordArray[index].length-1);

    //create boolean expressions that determine whether the charater at that char code is not an alphabetical character
    var firstHasPunctuation = !(65 <= firstCharCode && firstCharCode <= 90 || 97 <= firstCharCode && firstCharCode <= 122);
    var LastHasPunctuation = !(65 <= lastCharCode && lastCharCode <= 90 || 97 <= lastCharCode && lastCharCode <= 122);

    //check if the char codes were infact non alphabetical characters and then slice the punctuation off then reassign
    if (firstHasPunctuation){
      wordArray[index] = wordArray[index].slice(1);
    }else if(LastHasPunctuation){
      wordArray[index] = wordArray[index].slice(0,wordArray[index].length-1);
    }
  }
  return wordArray;
}


function wordHistogram(wordArray){
  //create a dicitonary
  var histogram = {};
  //create a for loop that access each character
  for(var index = 0; index < wordArray.length; index++){
    //when character is accessed make it into a key
      key = wordArray[index];
      //if this is the first occurance of the key, set its value to 0
      if(histogram[key] === undefined){
        histogram[key] = 1;
      //otherwise, increment the value by 1
      }else{
      histogram[key] += 1;
    }
  }
  return histogram;
}

function printTopTwo(histogram){
  var first = "";
  var second = "";
  var freq = 0;

  for (var key in histogram){
    if (histogram[key] >= freq && first === ""){
      freq = histogram[key]
      first = key;

    }else if(histogram[key] >= freq){
      freq = histogram[key];
      second = first;
      first = key;
    }
  }
  console.log("the most frequent key is: "+first+" with "+histogram[first]+" occurance(s)");
  console.log("the next most frequent key is: "+second+" with "+histogram[second]+" occurance(s)");
}


string = "!bananas are good, and mood food! Im in a good mood. uwu"
var wordArray = string.split(" ");
wordArray = removePunctuation(wordArray);
var histogram = wordHistogram(wordArray);

console.log(histogram);
printTopTwo(histogram);


/*
{ bananas: 1,
  are: 1,
  good: 2,
  and: 1,
  mood: 2,
  food: 1,
  Im: 1,
  in: 1,
  a: 1,
  uwu: 1 }
the most frequent key is: mood with 2 occurance(s)
the next most frequent key is: good with 2 occurance(s)
*/
