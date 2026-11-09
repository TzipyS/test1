import {
    createBoard,
    placeMines,
    calculateAllNearbyMines,
    revealCell
} from "./board.js";

import type { Cell } from "./types.js";

const ROWS = 10;
const COLS = 10;
const MINE_COUNT = 10;

const board = createBoard(ROWS, COLS);

placeMines(board, MINE_COUNT);

calculateAllNearbyMines(board);

function renderBoard(board: Cell[][]): void {
    const gameBoard = document.getElementById("game-board");

    if (!gameBoard) {
        return;
    }

    gameBoard.innerHTML = "";

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {

            const cell = board[r][c];

            const cellElement = document.createElement("div");

            cellElement.classList.add("cell");

            if (cell.status === "revealed") {
                cellElement.classList.add("revealed");

                if (cell.nearbyMines > 0) {
                    cellElement.textContent = String(cell.nearbyMines);
                }
            }

            // cellElement.addEventListener("click", () => {
            //     revealCell(board, r, c);
            //     renderBoard(board);
            // });
            cellElement.addEventListener("click", () => {
                console.log("Cell clicked:", r, c);

                revealCell(board, r, c);

                console.log("Cell status:", board[r][c].status);

                renderBoard(board);
            });

            gameBoard.appendChild(cellElement);
        }
    }
}

renderBoard(board);