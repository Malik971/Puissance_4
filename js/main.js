// Define HTML elements
// Set up player & color

let currentColor = "R";
const grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
// Change color every round
const toggleColor = () => {
  currentColor = currentColor === "R" ? "Y" : "R";
};
// Display grid
const displayGrid = () => {
  console.table(grid);
};
// Add event listenners
// / Get input from keyboard to play
// <element>.AddEventListener(<eventName: String> , CallBack:Function(event));
document.addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);
  if (keyCode >= 97 && keyCode <= 103) {
  console.log("good key");
    const colIndex = keyCode - 97;
    putTokenInGrid ({ colIndex, color: currentColor });
  }
});
// / // Put token in grid
const putTokenInGrid = ({ colIndex, color }) => {
  for (let i = grid.length - 1; i >= 0; i--) {
    if (grid[i][colIndex] === null) {
      grid[i][colIndex] = color;
      break;
    }
  }

  toggleColor();
  displayGrid();
};
// Ckeck win
// Option: Ckeck draw
// Option: Add IA
