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

let arr = ['1LA', '1B', '1RC', '2A', '2LRB', '2C', '3RA', '3B', '3LC'];
let positions = {};
positions.X = {};
positions.O = {};
positions.all = [];
let playerXO = ["One", "X"];
let found = false;
let playerOneScore = 0;
let playerTwoScore = 0;

let updatePositions = (string, object) => {
  let letters = string.split(",");
  for(let g = 0; g < letters.length; g++){
    if(object[letters[g]]){
      object[letters[g]] += 1;
    } else {
      object[letters[g]] = 1;
    }
  }
}

let checkWinner = (player, object) => {
  // console.log('checkWinner ', player, object)
  let objKeys = Object.keys(object);
  for(let i = 0; i < objKeys.length; i++){
    if(object[objKeys[i]] === 3){
      document.getElementById('playerTurn').innerHTML = `Player ${playerXO[0]} wins!`;
      if(playerXO[1] === "X"){
        playerOneScore +=1;
        document.getElementById('playerOneScore').innerHTML = `Player 1: ${playerOneScore}`;
      } else {
        playerTwoScore +=1;
        document.getElementById('playerTwoScore').innerHTML = `Player 2: ${playerTwoScore}`;
      }
      return;
    }
  }
  if(positions.all.length === 9){
    document.getElementById('playerTurn').innerHTML = "It's a tie!";
    return;
  }
  if(playerXO[1] === "X"){
    playerXO = ["Two", "O"];
    document.getElementById('playerTurn').innerHTML = `It's Player ${playerXO[0]}'s turn.`;
    // console.log(positions);
  } else {
    playerXO = ["One", "X"];
    document.getElementById('playerTurn').innerHTML = `It's Player ${playerXO[0]}'s turn.`;
    // console.log(positions);
  }
}

document.getElementById('playerTurn').innerHTML = `It's Player ${playerXO[0]}'s turn.`;

document.getElementById('1LA').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '1LA'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('1LA');
    document.getElementById('1LA').innerHTML = `[${playerXO[1]}]`;
    updatePositions('1,L,A', positions[`${playerXO[1]}`]);
    checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})


document.getElementById('1B').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '1B'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('1B');
    document.getElementById('1B').innerHTML = `[${playerXO[1]}]`;
    updatePositions('1,B', positions[`${playerXO[1]}`]);
    checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})



document.getElementById('1RC').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '1RC'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('1RC');
    document.getElementById('1RC').innerHTML = `[${playerXO[1]}]`;
  updatePositions('1,R,C', positions[`${playerXO[1]}`]);
  checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})

document.getElementById('2A').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '2A'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('2A');
    document.getElementById('2A').innerHTML = `[${playerXO[1]}]`;
    updatePositions('2,A', positions[`${playerXO[1]}`]);
    checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})
document.getElementById('2LRB').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '2LRB'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('2LRB');
    document.getElementById('2LRB').innerHTML = `[${playerXO[1]}]`;
    updatePositions('2,L,R,B', positions[`${playerXO[1]}`]);
    checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})
document.getElementById('2C').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '2C'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('2C');
    document.getElementById('2C').innerHTML = `[${playerXO[1]}]`;
    updatePositions('2,C', positions[`${playerXO[1]}`]);
    checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})

document.getElementById('3RA').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '3RA'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('3RA');
    document.getElementById('3RA').innerHTML = `[${playerXO[1]}]`;
    updatePositions('3,R,A', positions[`${playerXO[1]}`]);
    checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})


document.getElementById('3B').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '3B'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('3B');
    document.getElementById('3B').innerHTML = `[${playerXO[1]}]`;
    updatePositions('3,B', positions[`${playerXO[1]}`]);
    checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})


document.getElementById('3LC').addEventListener("click", function(){
  for(let z = 0; z < positions.all.length; z++){
    if(positions.all[z] === '3LC'){
      found = true;
    }
  }
  if(!found){
    positions.all.push('3LC');
    document.getElementById('3LC').innerHTML = `[${playerXO[1]}]`;
    updatePositions('3,L,C', positions[`${playerXO[1]}`]);
    checkWinner(`${playerXO[0]}`, positions[`${playerXO[1]}`]);
  } else {
    found = false;
  }
})

document.getElementById('reset').addEventListener("click", function(){
  let all = document.getElementsByClassName('board');
  // console.log(all);
  for(var k = 0; k < all.length; k++){
    all[k].innerHTML = '[&nbsp;&nbsp;]';
  }
  positions.X = {};
  positions.O = {};
  positions.all = [];
  playerXO = ["One", "X"];
  document.getElementById('playerTurn').innerHTML = `It's Player ${playerXO[0]}'s turn.`;
})








// document.getElementById('1B').addEventListener("click", function(){
//   document.getElementById('1B').innerHTML = '[X]';
//   updatePositions('1,B', positionsX);
//   checkWinner("One", positionsX);
// })
// document.getElementById('1RC').addEventListener("click", function(){
//   document.getElementById('1RC').innerHTML = '[X]';
//   updatePositions('1,R,C', positionsX);
//   checkWinner("One", positionsX);
// })

// document.getElementById('2A').addEventListener("click", function(){
//   document.getElementById('2A').innerHTML = '[X]';
//   updatePositions('2,A', positionsX);
//   checkWinner("One", positionsX);
// })
// document.getElementById('2LRB').addEventListener("click", function(){
//   document.getElementById('2LRB').innerHTML = '[X]';
//   updatePositions('2,L,R,B', positionsX);
//   checkWinner("One", positionsX);
// })
// document.getElementById('2C').addEventListener("click", function(){
//   document.getElementById('2C').innerHTML = '[X]';
//   updatePositions('2,C', positionsX);
//   checkWinner("One", positionsX);
// })

// document.getElementById('3RA').addEventListener("click", function(){
//   document.getElementById('3RA').innerHTML = '[X]';
//   updatePositions('3,R,A', positionsX);
// })
// document.getElementById('3B').addEventListener("click", function(){
//   document.getElementById('3B').innerHTML = '[X]';
//   updatePositions('3,B', positionsX);
// })
// document.getElementById('3LC').addEventListener("click", function(){
//   document.getElementById('3LC').innerHTML = '[X]';
//   updatePositions('3,L,C', positionsX);
// })

// document.getElementById('reset').addEventListener("click", function(){
//   let all = document.getElementsByClassName('board');
//   for(var k = 0; k < all.length; k++){
//     all[k].innerHTML = '[&nbsp;&nbsp;]';
//   }
//   positionsX = {};
//   positionsO = {};
// })








// let playerTwo = () => {
//   console.log('O', positionsO);
//   document.getElementById('playerTurn').innerHTML = "It's Player Two's turn.";

//   document.getElementById('1LA').addEventListener("click", function(){
//     document.getElementById('1LA').innerHTML = '[O]';
//     updatePositions('1,L,A', positionsO);
//     checkWinner("Two", positionsO);
//   })
//   document.getElementById('1B').addEventListener("click", function(){
//     document.getElementById('1B').innerHTML = '[O]';
//     updatePositions('1,B', positionsO);
//     checkWinner("Two", positionsO);
//   })
//   document.getElementById('1RC').addEventListener("click", function(){
//     document.getElementById('1RC').innerHTML = '[O]';
//     updatePositions('1,R,C', positionsO);
//     checkWinner("Two", positionsO);
//   })

//   document.getElementById('2A').addEventListener("click", function(){
//     document.getElementById('2A').innerHTML = '[O]';
//     updatePositions('2,A', positionsO);
//     checkWinner("Two", positionsO);
//   })
//   document.getElementById('2LRB').addEventListener("click", function(){
//     document.getElementById('2LRB').innerHTML = '[O]';
//     updatePositions('2,L,R,B', positionsO);
//     checkWinner("Two", positionsO);
//   })
//   document.getElementById('2C').addEventListener("click", function(){
//     document.getElementById('2C').innerHTML = '[O]';
//     updatePositions('2,C', positionsO);
//     checkWinner("Two", positionsO);
//   })

//   document.getElementById('3RA').addEventListener("click", function(){
//     document.getElementById('3RA').innerHTML = '[O]';
//     updatePositions('3,R,A', positionsO);
//     checkWinner("Two", positionsO);
//   })
//   document.getElementById('3B').addEventListener("click", function(){
//     document.getElementById('3B').innerHTML = '[O]';
//     updatePositions('3,B', positionsO);
//     checkWinner("Two", positionsO);
//   })
//   document.getElementById('3LC').addEventListener("click", function(){
//     document.getElementById('3LC').innerHTML = '[O]';
//     updatePositions('3,L,C', positionsO);
//     checkWinner("Two", positionsO);
//   })

//   document.getElementById('reset').addEventListener("click", function(){
//     let all = document.getElementsByClassName('board');
//     for(var k = 0; k < all.length; k++){
//       all[k].innerHTML = '[&nbsp;&nbsp;]';
//     }
//     positionsX = {};
//     positionsO = {};
//     runGame();
//   })
// }
// runGame();