var w1 = ['very','important','person'];
var w2 = ['national','aeronautics','space', 'administration'];

//array.map(func()).reduce(func())
//newArray.reduce(func())
//string

function acronym(array){
  var answer = array.map(function(n){
    return n[0];
  }).reduce(function(currentValue,char){
    return currentValue+char;
  },"");

  return answer;
}

console.log(acronym(w1));
console.log(acronym(w2));
