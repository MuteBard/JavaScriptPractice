var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'

};

daughter.__proto__ = mom;
// console.log(daughter.firstName, daughter.lastName, daughter.eyeColor, daughter.hairColor)

function showInfo(){
  console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
}

showInfo.apply(mom)
showInfo.apply(daughter)
