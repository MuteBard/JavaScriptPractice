function letterHistogram(string){
  //create a dicitonary
  var histogram = {};
  //create a for loop that access each character
  for(var index = 0; index < string.length; index++){
    //when character is accessed make it into a key
      key = string.charAt(index);
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


string = "banana";
console.log(letterHistogram(string));

/*
  { b: 1, a: 3, n: 2 }
*/
