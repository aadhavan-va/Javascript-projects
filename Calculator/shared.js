let acButton = document.querySelector(".button.ac");
let delButton = document.querySelector(".button.del");
let percentageButton = document.querySelector(".button.percentage");
let divideButton = document.querySelector(".button.divide");
let sevenButton = document.querySelector(".button.seven");
let eightButton = document.querySelector(".button.eight");
let nineButton = document.querySelector(".button.nine");
let multiplyButton = document.querySelector(".button.multiply");
let fourButton = document.querySelector(".button.four");
let fiveButton = document.querySelector(".button.five");
let sixButton = document.querySelector(".button.six");
let subtractButton = document.querySelector(".button.subtract");
let oneButton = document.querySelector(".button.one");
let twoButton = document.querySelector(".button.two");
let threeButton = document.querySelector(".button.three");
let addButton = document.querySelector(".button.add");
let zeroButton = document.querySelector(".button.zero");
let dotButton = document.querySelector(".button.dot");
let equalButton = document.querySelector(".button.equal");
let firstNumber = "";
let secondNumber = "";
let finalResult = "";
let symbol = "";
let firstTurn = true;
let calculationDone = false;

let sectionOne = document.querySelector(".section-one");

function resetFunction() {
  firstNumber = "";
  secondNumber = "";
  finalResult = "";
  firstTurn = true;
  calculationDone = false;
  symbol = "";
  sectionOne.textContent = "";
  setTimeout(() => {
    alert("All values has been reset!");
  }, 300);
}

acButton.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  finalResult = "";
  firstTurn = true;
  calculationDone = false;
  symbol = "";
  sectionOne.textContent = "";
});

delButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn === false) {
    if (secondNumber.length > 0) {
      secondNumber = secondNumber.slice(0, -1);
      sectionOne.textContent = secondNumber;
    }
  } else {
    if (firstNumber.length > 0) {
      firstNumber = firstNumber.slice(0, -1);
      sectionOne.textContent = firstNumber;
    }
  }
});

percentageButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstNumber.length === 0) {
    return;
  } else {
    symbol = "%";
    firstTurn = false;
  }
});

divideButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstNumber.length === 0) {
    return;
  } else {
    symbol = "/";
    firstTurn = false;
  }
});

sevenButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "7";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "7";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

eightButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "8";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "8";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

nineButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "9";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "9";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

multiplyButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstNumber.length === 0) {
    return;
  } else {
    symbol = "*";
    firstTurn = false;
  }
});

fourButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "4";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "4";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

fiveButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "5";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "5";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

sixButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "6";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "6";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

subtractButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstNumber.length === 0) {
    return;
  } else {
    symbol = "-";
    firstTurn = false;
  }
});

oneButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "1";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "1";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

twoButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "2";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "2";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

threeButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "3";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "3";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

addButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstNumber.length === 0) {
    return;
  } else {
    symbol = "+";
    firstTurn = false;
  }
});

zeroButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length === 0) {
      alert("Invalid input entered!");
    } else if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += "0";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length === 0) {
      alert("Invalid input entered!");
    } else if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += "0";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

dotButton.addEventListener("click", () => {
  if (calculationDone) {
    resetFunction();
    return;
  }
  if (firstTurn) {
    if (firstNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      firstNumber += ".";
      sectionOne.textContent = "";
      sectionOne.textContent = firstNumber;
    }
  } else {
    if (secondNumber.length >= 6) {
      alert("Only 6 digits are allowed!");
    } else {
      secondNumber += ".";
      sectionOne.textContent = "";
      sectionOne.textContent = secondNumber;
    }
  }
});

equalButton.addEventListener("click", () => {
  if (firstTurn) {
    firstNumber = "";
    secondNumber = "";
    finalResult = "";
    firstTurn = true;
    symbol = "";
    sectionOne.textContent = "";
  } else {
    if (symbol === "%") {
      finalResult = parseFloat(firstNumber) % parseFloat(secondNumber);
      sectionOne.textContent = finalResult;
    } else if (symbol === "+") {
      finalResult = parseFloat(firstNumber) + parseFloat(secondNumber);
      sectionOne.textContent = finalResult;
    } else if (symbol === "-") {
      finalResult = parseFloat(firstNumber) - parseFloat(secondNumber);
      sectionOne.textContent = finalResult;
    } else if (symbol === "*") {
      finalResult = parseFloat(firstNumber) * parseFloat(secondNumber);
      sectionOne.textContent = finalResult;
    } else if (symbol === "/") {
      finalResult = parseFloat(firstNumber) / parseFloat(secondNumber);
      sectionOne.textContent = finalResult.toString().length > 6 ? finalResult.toString().slice(0,7) : finalResult;
    }
    calculationDone = true;
  }
});
