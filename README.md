# TicTacToe Solver

This project implements a 4x4 Tic-Tac-Toe/Connect Four solver in TypeScript. The solver determines the current state of a 4x4 board in terms of whether there is a winner, if any moves are left, and if the game is over. The victory conditions include vertical, horizontal, diagonal, all four corners, and a 2x2 box.

## Class Methods

### `checkWinner(board: string[][]): string | null`

This method checks if there is a winner on the board. It evaluates the following conditions:
1. Vertical lines.
2. Horizontal lines.
3. Diagonal lines (two possible).
4. All four corners.
5. 2x2 box.

**Parameters:**
- `board`: A 4x4 array representing the Tic-Tac-Toe board.

**Returns:**
- The winner (`'X'` or `'O'`) if there is one, otherwise `null`.

### `anyMovesLeft(board: string[][]): boolean`

This method checks if there are any moves left on the board.

**Parameters:**
- `board`: A 4x4 array representing the Tic-Tac-Toe board.

**Returns:**
- `true` if there are empty spaces, otherwise `false`.

### `isGameOver(board: string[][]): boolean`

This method checks if the game is over. The game is over if there is a winner or if there are no moves left.

**Parameters:**
- `board`: A 4x4 array representing the Tic-Tac-Toe board.

**Returns:**
- `true` if the game is over, otherwise `false`.

## Usage

To use this project, follow the steps below:

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_folder>
