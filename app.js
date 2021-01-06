  // document.getElementById('1LA').onclick = click('1LA');

let arr = ['1LA', '1B', '1RC', '2A','2LRB', '2C', '3RA', '3B', '3LC'];

let currentX = [];
let currentO = [];

document.getElementById('1LA').addEventListener("click", function(){
  document.getElementById('1LA').innerHTML = '[X]';
  currentX.push('1LA');
})

document.getElementById('1B').addEventListener("click", function(){
  document.getElementById('1B').innerHTML = '[X]';
  currentX.push('1B');

})
document.getElementById('1RC').addEventListener("click", function(){
  document.getElementById('1RC').innerHTML = '[X]';
  currentX.push('1RC');
})

document.getElementById('2A').addEventListener("click", function(){
  document.getElementById('2A').innerHTML = '[X]';
  currentX.push('2A');
})
document.getElementById('2LRB').addEventListener("click", function(){
  document.getElementById('2LRB').innerHTML = '[X]';
  currentX.push('2LRB');
})
document.getElementById('2C').addEventListener("click", function(){
  document.getElementById('2C').innerHTML = '[X]';
  currentX.push('2C');
})

document.getElementById('3RA').addEventListener("click", function(){
  document.getElementById('3RA').innerHTML = '[X]';
  currentX.push('3RA');
})
document.getElementById('3B').addEventListener("click", function(){
  document.getElementById('3B').innerHTML = '[X]';
  currentX.push('3B');
})
document.getElementById('3LC').addEventListener("click", function(){
  document.getElementById('3LC').innerHTML = '[X]';
  currentX.push('3LC');
})

document.getElementById('reset').addEventListener("click", function(){
  let all = document.getElementsByClassName('board');
  for(var k = 0; k < all.length; k++){
    all[k].innerHTML = '[&nbsp;&nbsp;]';
  }
})


// Pushing buttons
// // click a button
//   // if filled, it doesn't work
//   // else, put a symbol (X) there (based on player)
//   // check victory

// Checking victory
// // check board state
//   // check all buttons with symbol in them (X)
//     //get elementByID all of those buttons.
//       // if the 3 IDs contain the same num/letter, that player wins. 123ABCLR

// Reseting
// // click on the button to reset gameboard. CANNOT refresh page