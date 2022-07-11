// Retourne le nombre de possibilités de placer n reines sur un échiquier de taille nxn, sans se manger entre elles en un coup

const countValidQueens = (n) => {
    let result = 0;
    let board = [];
    for (let i = 0; i < n; i++) {
        board[i] = [];
        for (let j = 0; j < n; j++) {
            board[i][j] = 0;
        }
    }
    const placeQueen = (row) => {
        if (row === n) {
            result++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (board[row][col] === 0) {
                board[row][col] = 1;
                placeQueen(row + 1);
                board[row][col] = 0;
            }
        }
    }
    placeQueen(0);
    return result;
}

console.log(countValidQueens(3));