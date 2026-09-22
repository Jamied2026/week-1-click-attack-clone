let score = 0;


const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
// TODO: create addPoint()
function addPoint() {
  score++;
  updateDisplay();
}

// TODO: create resetGame()
function resetGame() {
  score = 0;
  title.innerText = "Click Attack";
  updateDisplay();
}
//Update display
function updateDisplay(){
  scoreDisplay.innerText = score;






}
// TODO: connect both functions to buttons
attackButton.addEventListener("click", addPoint);
resetButton.addEventListener("click", resetGame);
