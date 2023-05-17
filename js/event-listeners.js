const onKeyUp = ({ keyCode }) => {
  console.log("onKeyUP");
  if (isPlaying === false && keyCode === 32) {
    console.table(defaultGrid);
    console.table(grid);
    grid = [...defaultGrid];
    drawBoard()
    // displayGrid();
  }
  if (keyCode >= 97 && keyCode <= 103) {
    console.log("good key");
    const colIndex = keyCode - 97;
    putTokenInGrid({ colIndex, color: currentColor });
    console.log({ currentColor });
    const isWin = ckeckWin({ grid, color: currentColor });
    if (isWin) {
      isPlaying = false;
      drawWinner();
    } else {
      toggleColor();
    }
    displayGrid();
  }
};
