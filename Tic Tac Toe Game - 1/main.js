let player1 = true,
  player2 = false;

let arr = new Array(3);

for (let i = 0; i < 3; i++) {
  arr[i] = new Array(3);
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 0;
  }
}

function solve(row, col) {
    if(row == 0) {
        if(col == 0) {
            if(arr[row][col] == arr[row][col + 1] && arr[row][col] == arr[row][col + 2]) {
                return arr[row][col];
            }
            if(arr[row][col] == arr[row + 1][col + 1] && arr[row][col] == arr[row + 2][col + 2]) {
                return arr[row][col];
            }
            if(arr[row][col] == arr[row+1][col] && arr[row][col] == arr[row+2][col]) {
                return arr[row][col];
            }
        }
        else if(col == 1) {
            if(arr[row][col] == arr[row][col - 1] && arr[row][col] == arr[row][col + 1]) {
                return arr[row][col];
            }
            if(arr[row][col] == arr[row + 1][col] && arr[row][col] == arr[row + 2][col]) {
                return arr[row][col];
            }
        }
        else {
            if(arr[row][col] == arr[row][col - 1] && arr[row][col] == arr[row][col - 2]) {
                return arr[row][col];
            }
            if(arr[row][col] == arr[row + 1][col - 1] && arr[row][col] == arr[row + 2][col - 2]) {
                return arr[row][col];
            }
            if(arr[row][col] == arr[row+1][col] && arr[row][col] == arr[row+2][col]) {
                return arr[row][col];
            }
        }
    }
    else if(row == 1) {
        if(col == 0) {
            if(arr[row][col] == arr[row - 1][col] && arr[row][col] == arr[row + 1][col + 1]) {
                return arr[row][col];
            }
            if(arr[row][col] == arr[row][col + 1] && arr[row][col] == arr[row][col + 2]) {
                return arr[row][col];
            }
        }
        else if(col == 1) {
            // vertical
            if(arr[row][col] == arr[row - 1][col] && arr[row][col] == arr[row + 1][col]) {
                return arr[row][col];
            }
            // horizontal
            if(arr[row][col] == arr[row][col-1] && arr[row][col] == arr[row][col+1]) {
                return arr[row][col];
            }
            // side
            if(arr[row][col] == arr[row - 1][col - 1] && arr[row][col] == arr[row +1][col + 1]) {
                return arr[row][col];
            }
            if(arr[row][col] == arr[row - 1][col + 1] && arr[row][col] == arr[row + 1][col-1]) {
                return arr[row][col];
            }
        }
        else {
            //vertical
            if(arr[row][col] == arr[row + 1][col] && arr[row][col] == arr[row - 1][col]) {
                return arr[row][col];
            }
            //horizontal
            if(arr[row][col] == arr[row][col-1] && arr[row][col] == arr[row][col-2]) {
                return arr[row][col];
            }
        }
    }
    else {
        if(col == 0) {
            //vertical
            if(arr[row][col] == arr[row - 1][col] && arr[row][col] == arr[row - 2][col]) {
                return arr[row][col];
            }
            //horizontal
            if(arr[row][col] == arr[row][col+1] && arr[row][col] == arr[row][col+2]) {
                return arr[row][col];
            }
        }
        else if(col == 1) {
            //vertical
            if(arr[row][col] == arr[row - 1][col] && arr[row][col] == arr[row -2][col]) {
                return arr[row][col];
            }
            //horizontal
            if(arr[row][col] == arr[row][col-1] && arr[row][col] == arr[row][col+1]) {
                return arr[row][col];
            }
        }
        else {
            //vertical
            if(arr[row][col] == arr[row - 1][col] && arr[row][col] == arr[row - 2][col]) {
                return arr[row][col];
            }
            //horizontal
            if(arr[row][col] == arr[row][col-1] && arr[row][col] == arr[row][col-2]) {
                return arr[row][col];
            }
            if(arr[row][col] == arr[row-1][col-1] && arr[row][col] == arr[row-2][col-2]) {
                return arr[row][col];
            }
        }
    }
    return 'z';
}
function checkWin(num) {
    let cnt = 0, row, col;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cnt += 1;
            if(cnt == num) {
                if(player1) {
                    arr[i][j] = 'X';
                    player1 = false;
                    player2 = true;
                }
                else {
                    player1 = true;
                    player2 = false;
                    arr[i][j] = 'O';
                }
                row = i;
                col = j;
            }
        }
    }
    console.log(row, col);
    let a = solve(row, col);
    console.log(`value of A ${a}`);
    if(a == 'X') {
        alert(`winner is player1`);
    }
    else if(a == 'O') {
        alert('winner if player2');
    }
}

function addMark(id) {
  let element = document.getElementById(`item-${id}`);
  element.innerHTML = "";
  if (player1) {
    let text = document.createTextNode("X");
    element.appendChild(text);
  } else {
    let text = document.createTextNode("O");
    element.appendChild(text);
  }
  checkWin(id);
}
