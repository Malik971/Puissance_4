// Define HTML elements
// Set up player & color

let canvasEl = null;
let ctx = null;
let currentColor = "R";
let isPlaying = true;
const defaultGrid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
let grid = [...defaultGrid];
// Change color every round
const toggleColor = () => {
  currentColor = currentColor === "R" ? "Y" : "R";
};

// Option: Ckeck draw
// Option: Add IA

const init = () => {
  attachFromDOM();
  addEventListeners();

  drawBoard();
  displayGrid();
  // checkWin({ grid, color: "Y" });
  // ctx.translate(50, 50);
};

const attachFromDOM = () => {
  canvasEl = document.querySelector("#canvas");
  ctx = canvasEl.getContext("2d");
};

const addEventListeners = () => {
  // Add event listenners
  // / Get input from keyboard to play
  // <element>.AddEventListener(<eventName: String> , CallBack:Function(event));
  console.log("#addEventListeners");
  document.addEventListener("keyup", onKeyUp);
};

window.addEventListener("load", init);
