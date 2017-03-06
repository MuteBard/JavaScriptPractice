var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function SortStrings(people){
  var sortedList = people.sort(function(a,b){
    if (a.length > b.length){
      return 1;
    }else if (a.length < b.length){
      return -1;
    }else{
      return 0;
    }
  });
  return sortedList
}
console.log(SortStrings(people));
