import type { Cell } from "./types.js";
export declare function createBoard(rows: number, cols: number): Cell[][];
export declare function placeMines(board: Cell[][], mineCount: number): void;
export declare function countNearbyMines(board: Cell[][], row: number, col: number): number;
export declare function calculateAllNearbyMines(board: Cell[][]): void;
export declare function revealCell(board: Cell[][], row: number, col: number): void;
//# sourceMappingURL=board.d.ts.map