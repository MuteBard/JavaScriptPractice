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
  //charCodeAt(0)
  var sortedList = people.sort();
  return sortedList;
}

console.log(SortStrings(people));
