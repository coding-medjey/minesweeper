function bombCount(matrix, i, j) {
  let count = 0;
  for (let k = i - 1; k <= i + 1; k++) {
    for (let l = j - 1; l <= j + 1; l++) {
      if (matrix[k] && matrix[k][l] === "*") {
        count++;
      }
    }
  }
  return count;
}

function randomIndex(size) {
  return Math.floor(Math.random() * size);
}

function createBoard(size, bombs) {
  let row = [];
  for (let i = 0; i < size; i++) {
    let cell = [];
    for (let j = 0; j < size; j++) {
      cell.push(0);
    }
    row.push(cell);
  }
  for (let i = 0; i < bombs; i++) {
    let bombsRow = randomIndex(size);
    let bombsCol = randomIndex(size);
    while (row[bombsRow][bombsCol] === "*") {
      bombsRow = randomIndex(size);
      bombsCol = randomIndex(size);
    }
    row[bombsRow][bombsCol] = "*";
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (row[i][j] !== "*") {
        row[i][j] = bombCount(row, i, j);
      }
    }
  }

  return row;
}
