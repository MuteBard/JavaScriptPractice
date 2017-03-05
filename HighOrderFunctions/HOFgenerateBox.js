function generateBox(width,height){
  function range(min, max, list){
    if(min > max-1){
      return null;
    }else{
      list.push(min);
      min++;
      range(min, max, list);
      return list;
    }
  }
//create an array of stars in one row then convert to string
  var starRow = range(0,width,[]).map(function(n){
    return "*";
  }).reduce(function(currentValue,stars){
    return currentValue+stars;
  },"");

//create an array of rows+newline then convert to a string
  var starBox = range(0, height,[]).map(function(n){
    return starRow+"\n";
  }).reduce(function(currentValue,rows){
    return currentValue+rows;
  },"");

  return starBox;
}

console.log(generateBox(8,2));
// HighOrderFunctions $node HOFgenerateBox.js
// ********
// ********
