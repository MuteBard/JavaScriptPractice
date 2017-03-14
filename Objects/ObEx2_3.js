
// //constructor
// function Person(name){
//   this.name = name;
//   this.friends = [];
//   this.greet = function(other){
//     console.log(this.createGreeting(other));
//   }
// }
//
// Person.prototype.addFriend = function(friend){
//   this.friends.push(friend);
// };
//
// Person.prototype.createGreeting = function(other){
//   return 'Yo '+ other.name+ '! from '+ this.name + '.'
// };
//
// var carl = new Person('Carl')
// var angus = new Person('Angus')
//
// carl.addFriend('Angus')
// carl.addFriend('Yuhua')
// carl.addFriend('Matt')
// carl.addFriend('Nate')
//
// console.log(carl.createGreeting(angus))

//-----------------------------------------------------------//


//factory function
function createPerson(name){
  var person = {
    name: name,
    friends: [],
    greet: function(other){
      console.log(this.createGreeting(other));
    }
  };
  return person;
}
function addFriend(friend){
  this.friends.push(friend);
}
function createGreeting(other){
  return 'Yo '+ other.name+ '! from '+ this.name + '.'
}

carl = createPerson('Carl');
angus = createPerson('Angus');


console.log(createGreeting.apply(carl,[angus]))
console.log(createGreeting.apply(angus, [carl]))
