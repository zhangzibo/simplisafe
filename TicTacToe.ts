class TicTacToe {
    public checkWinner(board: string[][]): string | null {
        const size = 4;

        // Helper function to check if all elements in the array are the same and not empty
        const allEqual = (arr: string[]): boolean => {
            return arr.every(cell => cell !== '' && cell === arr[0]);
        };

        // Check vertical and horizontal
        for (let i = 0; i < size; i++) {
            if (allEqual(board[i])) return board[i][0];
            if (allEqual([board[0][i], board[1][i], board[2][i], board[3][i]])) return board[0][i];
        }

        // Check diagonals
        if (allEqual([board[0][0], board[1][1], board[2][2], board[3][3]])) return board[0][0];
        if (allEqual([board[0][3], board[1][2], board[2][1], board[3][0]])) return board[0][3];

        // Check all four corners
        if (board[0][0] !== '' && board[0][0] === board[0][3] && board[0][0] === board[3][0] && board[0][0] === board[3][3]) {
            return board[0][0];
        }

        // Check 2x2 boxes
        for (let i = 0; i < size - 1; i++) {
            for (let j = 0; j < size - 1; j++) {
                if (allEqual([board[i][j], board[i][j+1], board[i+1][j], board[i+1][j+1]])) {
                    return board[i][j];
                }
            }
        }

        // No winner
        return null;
    }

    public anyMovesLeft(board: string[][]): boolean {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '') {
                    return true;
                }
            }
        }
        return false;
    }

    public isGameOver(board: string[][]): boolean {
        return this.checkWinner(board) !== null || !this.anyMovesLeft(board);
    }
}

// Unit Tests
const assert = require('assert');

const runTests = () => {
    const game = new TicTacToe();

    // Test 1: No winner, moves left
    let board = [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ];
    assert.strictEqual(game.checkWinner(board), null);
    assert.strictEqual(game.anyMovesLeft(board), true);
    assert.strictEqual(game.isGameOver(board), false);

    // Test 2: Horizontal winner
    board = [
        ['X', 'X', 'X', 'X'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ];
    assert.strictEqual(game.checkWinner(board), 'X');
    assert.strictEqual(game.anyMovesLeft(board), true);
    assert.strictEqual(game.isGameOver(board), true);

    // Test 3: Vertical winner
    board = [
        ['O', '', '', ''],
        ['O', '', '', ''],
        ['O', '', '', ''],
        ['O', '', '', '']
    ];
    assert.strictEqual(game.checkWinner(board), 'O');
    assert.strictEqual(game.anyMovesLeft(board), true);
    assert.strictEqual(game.isGameOver(board), true);

    // Test 4: Diagonal winner
    board = [
        ['X', '', '', ''],
        ['', 'X', '', ''],
        ['', '', 'X', ''],
        ['', '', '', 'X']
    ];
    assert.strictEqual(game.checkWinner(board), 'X');
    assert.strictEqual(game.anyMovesLeft(board), true);
    assert.strictEqual(game.isGameOver(board), true);

    // Test 5: Four corners winner
    board = [
        ['O', '', '', 'O'],
        ['', '', '', ''],
        ['', '', '', ''],
        ['O', '', '', 'O']
    ];
    assert.strictEqual(game.checkWinner(board), 'O');
    assert.strictEqual(game.anyMovesLeft(board), true);
    assert.strictEqual(game.isGameOver(board), true);

    // Test 6: 2x2 box winner
    board = [
        ['X', 'X', '', ''],
        ['X', 'X', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ];
    assert.strictEqual(game.checkWinner(board), 'X');
    assert.strictEqual(game.anyMovesLeft(board), true);
    assert.strictEqual(game.isGameOver(board), true);

    // Test 7: No winner, no moves left
    board = [
        ['X', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'X']
    ];
    assert.strictEqual(game.checkWinner(board), null);
    assert.strictEqual(game.anyMovesLeft(board), false);
    assert.strictEqual(game.isGameOver(board), true);

    console.log('All tests passed!');
};

runTests();
