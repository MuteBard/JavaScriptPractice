function attack(){
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];

  function fire(row, col) {
    if (board[row][col] === 'o') {
      board[row][col] = 'x'
      return 'Hit!'
    } else {
      return 'Miss'
    }
  }
  return {Fire:fire};
}

var ReadyAim = attack();
console.log(ReadyAim.Fire(0,1));
console.log(ReadyAim.Fire(1,1));
console.log(ReadyAim.Fire(4,0));
console.log(ReadyAim.Fire(4,4));
console.log(ReadyAim.Fire(3,0));
console.log(ReadyAim.Fire(2,2));

// Miss
// Miss
// Miss
// Hit!
// Hit!
// Hit!
