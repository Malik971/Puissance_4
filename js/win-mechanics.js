// Ckeck win

const ckeckWin = ({ grid, color }) => {
  console.log("#checkWin color", color);
  console.table(grid);
  // ckeck vertical
  const isWinVer = checkVertical({ grid, color });
  // ckeck horizontal
  const isWinHor = ckeckHorizontal({ grid, color });
  // ckeck diag tl to br
  // ckeck diag tr to bl
  const isWin = isWinVer || isWinHor;
  console.log({ isWinVer, isWinHor, isWin });
  return isWin;
};

const ckeckDiagTLBR = ({ grid, color } = {}) => {
  for (let x = 0; x < grid[0].length - 3; x++) {
    for (let y = 0; y < grid.length; y++) {
      console.log(grid[y][x]);
      console.log(grid[y + 1][x + 1]);
      console.log(grid[y + 2][x + 2]);
      console.log(grid[y + 3][x + 3]);
      if (
        color ===
        (grid[y][x] && grid[y][x + 1] && grid[y][x + 2] && grid[y][x + 3])
      ) {
        console.log("win");
        return true;
      }
    }
  }
  return false;
};

const ckeckDiagTLBL = ({ grid, color } = {}) => {
  for (let x = 0; x < grid[0].length - 3; x++) {
    for (let y = 0; y < grid.length; y++) {
      console.log(grid[y][x]);
      console.log(grid[y + 1][x - 1]);
      console.log(grid[y + 2][x - 2]);
      console.log(grid[y + 3][x - 3]);
      if (
        color ===
        (grid[y][x] && grid[y][x + 1] && grid[y][x + 2] && grid[y][x + 3])
      ) {
        console.log("win");
        return true;
      }
    }
  }
  return false;
};

const ckeckHorizontal = ({ grid, color } = {}) => {
  for (let x = 0; x < grid[0].length - 3; x++) {
    for (let y = 0; y < grid.length; y++) {
      // console.log(grid[y][x]);
      // console.log(grid[y][x + 1]);
      // console.log(grid[y][x + 2]);
      // console.log(grid[y][x + 3]);
      if (
        grid[y][x] === color &&
        grid[y][x + 1] === color &&
        grid[y][x + 2] === color &&
        grid[y][x + 3] === color
      ) {
        // if (
        //   color ===
        //   (grid[y][x] && grid[y][x + 1] && grid[y][x + 2] && grid[y][x + 3])
        // ) {
        console.log("win horizontal");
        return true;
      }
    }
  }
  return false;
};
const checkVertical = ({ grid, color }) => {
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length - 3; y++) {
      // console.log(grid[y][x]);
      // console.log(grid[y + 1][x]);
      // console.log(grid[y + 2][x]);
      // console.log(grid[y + 3][x]);
      // console.log("---");
      if (
        grid[y][x] === color &&
        grid[y + 1][x] === color &&
        grid[y + 2][x] === color &&
        grid[y + 3][x] === color
      ) {
        // if (
        //   color ===
        //   (grid[y][x] && grid[y + 1][x] && grid[y + 2][x] && grid[y + 3][x])
        // ) {
        console.log("win vertical");
        return true;
      }
    }
    // console.log("--- end y");
  }
  // console.log("--- end x");
  return false;
};
