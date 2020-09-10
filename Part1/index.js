
const progress = [];

function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        progress[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        progress[clickedId] = 'O';
    }
    console.log(progress);

    const topLeft = progress[0];
    const topCenter = progress[1];
    const topRight = progress[2];
    const middleLeft = progress[3];
    const middleCenter = progress[4];
    const middleRight = progress[5];
    const bottomLeft = progress [6];
    const bottomCenter = progress [7];
    const bottomRight = progress [8];


    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} wins!`);
        return;
      }
      if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} wins!`);
        return;
      }
      if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} wins!`);
        return;
      }
      if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} wins!`);
        return;
      }
      if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} wins!`);
        return;
      }
      if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} wins!`);
        return;
      }
      if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} wins!`);
        return;
      }
      if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} wins!`);
        return;
      }

      let progressFull = true;
    for (let i = 0; i <= 8; i++){
    if (progressFull[i] === undefined){
        progressFull = false;
        }
    } 
    if (progressFull === true){
        alert("No winner! Cat's game!");
    }
}















    


