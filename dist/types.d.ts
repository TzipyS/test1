export type CellStatus = "hidden" | "revealed" | "flagged";
export interface Cell {
    status: CellStatus;
    hasMine: boolean;
    nearbyMines: number;
}
//# sourceMappingURL=types.d.ts.map