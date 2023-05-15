const onKeyUp = ({ keyCode }) => {
    if (keyCode >= 97 && keyCode <= 103) {
      console.log("good key");
      const colIndex = keyCode - 97;
      putTokenInGrid({ colIndex, color: currentColor });
    }
  };
  