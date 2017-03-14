//method one
// var spiderman = {
//   name: 'Spiderman',
//   realName: 'Peter Parker',
//   sayHi: function(){
//     console.log('I am '+this.name+'!')
//   }
// };
//
// var superman = {
//   name: 'Superman',
//   realName: 'Clarke Kent',
//   sayHi : function(){
//     console.log('I am '+this.name+'!');
//   }
// };
//
//
// spiderman.sayHi()
// superman.sayHi()


//method 2
// var spiderman = {
//   name: 'Spiderman',
//   realName: 'Peter Parker'
// };
//
// var superman = {
//   name: 'Superman',
//   realName: 'Clarke Kent'
// };
//
// var sayHi = function(){
//   console.log('I am '+this.name+'!');
// }
//
// // function sayHi(){
// //   console.log('I am '+this.name+'!')
// // }
//
// spiderman.sayHi = sayHi;
// spiderman.sayHi()
//
// superman.sayHi = sayHi;
// superman.sayHi()



//method 3
var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker'
};

var superman = {
  name: 'Superman',
  realName: 'Clarke Kent'
};


function sayHi(){
  console.log('I am '+this.name+'!');
}

sayHi.apply(spiderman)
sayHi.apply(superman)
