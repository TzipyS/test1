// יצירת לוח
export function createBoard(rows, cols) {
    const board = [];
    for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < cols; c++) {
            const cell = {
                status: "hidden",
                hasMine: false, // This will be set later
                nearbyMines: 0 // This will be calculated later
            };
            row.push(cell);
        }
        board.push(row);
    }
    return board;
}
// console.log(createBoard(9, 9))
// const board = createBoard(3, 4);
// board[1][2].hasMine = true;
// Math.floor(Math.random() * board[0].length);
// Math.floor(Math.random() * board.length);
//פונקציה להצבת מוקשים על הלוח
export function placeMines(board, mineCount) {
    let placedMines = 0;
    if (mineCount > board.length * board[0].length) {
        throw new Error("Too many mines");
    }
    while (placedMines < mineCount) {
        const row = Math.floor(Math.random() * board.length);
        const col = Math.floor(Math.random() * board[0].length);
        if (!board[row][col].hasMine) {
            board[row][col].hasMine = true;
            placedMines++;
        }
    }
}
//ספירת מוקשים סמוכים
export function countNearbyMines(board, row, col) {
    let count = 0;
    for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
            if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
                if (r === row && c === col) {
                    continue; // Skip the cell itself
                }
                if (board[r][c].hasMine) {
                    count++;
                }
            }
        }
    }
    return count;
}
// countNearbyMines(board, 1, 1);
// //חישוב שכנים
// const testBoard = createBoard(3, 3);
// testBoard[0][0].hasMine = true;
// testBoard[0][1].hasMine = true;
// const nearbyMinesCount = countNearbyMines(testBoard, 1, 1);
// console.log("Nearby mines count for cell (1, 1):", nearbyMinesCount); // Should output 2
//חישוב מספר מוקשים סמוכים
export function calculateAllNearbyMines(board) {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (!board[r][c].hasMine) {
                board[r][c].nearbyMines = countNearbyMines(board, r, c);
            }
        }
    }
}
//שינוי סטטוס של תא
export function revealCell(board, row, col) {
    if (row >= 0 && row < board.length && col >= 0 && col < board[0].length) {
        if (board[row][col].status !== "revealed" &&
            board[row][col].status !== "flagged") {
            board[row][col].status = "revealed";
        }
    }
}
//# sourceMappingURL=board.js.map