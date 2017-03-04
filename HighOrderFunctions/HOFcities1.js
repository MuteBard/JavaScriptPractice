
var cities = [
  {name: 'Los Angeles', temperature: 60.0},
  {name: 'Atlanta', temperature: 52.0},
  {name: 'Detroit', temperature: 48.0},
  {name: 'New York', temperature: 80.0},
];


//When using filter make sure to return a boolean value so that it may work properly
var coolcities = cities.filter(function(n){
  //is there a reason n[temperature] does not work?
  return n.temperature < 70;
});

console.log(coolcities);
