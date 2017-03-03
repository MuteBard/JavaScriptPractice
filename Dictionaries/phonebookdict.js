var phonebookDict = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
};


//Make sure to keep quotations around the key, javascript doesnt like them omitted
console.log(phonebookDict['Alice']);
console.log(phonebookDict.Alice);

/*
703-493-1834
703-493-1834
*/

//adding an entry to the dictionary
phonebookDict['Kareem'] = '938-489-1223';
console.log(phonebookDict);

/*
{ Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923',
  Kareem: '938-489-1223' }
*/

//deleting from a dicitonary
delete phonebookDict['Alice'];
console.log(phonebookDict);

/*
{ Bob: '857-384-1234',
  Elizabeth: '484-584-2923',
  Kareem: '938-489-1223' }
*/

//changing Bob's phone number
phonebookDict['Bob'] = '968-354-2345';
console.log(phonebookDict);
/*
{ Bob: '968-354-2345',
  Elizabeth: '484-584-2923',
  Kareem: '938-489-1223' }
*/

//giving a variable the name of the key to access the same contents
var personName = 'Elizabeth';
console.log(phonebookDict[personName]);

/*
  484-584-2923
*/

for (var key in phonebookDict){
    var children = phonebookDict[key];
    console.log(key+': '+children);
}
/*
Bob: 968-354-2345
Elizabeth: 484-584-2923
Kareem: 938-489-1223
*/
