  // document.getElementById('1LA').onclick = click('1LA');

let arr = ['1LA', '1B', '1RC', '2A','2LRB', '2C', '3RA', '3B', '3LC'];

document.getElementById('1LA').addEventListener("click", function(){ document.getElementById('1LA').innerHTML = '[X]';})

document.getElementById('1B').addEventListener("click", function(){ document.getElementById('1B').innerHTML = '[X]';})
document.getElementById('1RC').addEventListener("click", function(){ document.getElementById('1RC').innerHTML = '[X]';})

document.getElementById('2A').addEventListener("click", function(){ document.getElementById('2A').innerHTML = '[X]';})
document.getElementById('2LRB').addEventListener("click", function(){ document.getElementById('2LRB').innerHTML = '[X]';})
document.getElementById('2C').addEventListener("click", function(){ document.getElementById('2C').innerHTML = '[X]';})

document.getElementById('3RA').addEventListener("click", function(){ document.getElementById('3RA').innerHTML = '[X]';})
document.getElementById('3B').addEventListener("click", function(){ document.getElementById('3B').innerHTML = '[X]';})
document.getElementById('3LC').addEventListener("click", function(){ document.getElementById('3LC').innerHTML = '[X]';})

// for(let i = 0; i < arr.length; i++){
//   document.getElementById(arr[i]).addEventListener("click", function(){ document.getElementById(this.id).innerHTML = '[X]';})
// }




  // function click(){
  //   console.log();
  //   document.getElementById(event.srcElement.id).innerHTML = '[X]';
  //   console.log("Click function")
  // }





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