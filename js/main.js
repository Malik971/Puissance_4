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
document.addEventListener("keyup", onKeyUp);
// Option: Ckeck draw
// Option: Add IA

const init = () => {
  addEventListeners();
};

const addEventListener = () => {};

window.addEventListener("load", init);
