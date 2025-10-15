import React, { useMemo, useState } from 'react';
import Board from './Board';

/**
 * PUBLIC_INTERFACE
 * Game component manages Tic Tac Toe state: turns, winner/draw detection, and reset.
 * - Displays centered board with status above and controls below.
 * - Provides accessible status updates via aria-live.
 */
function Game() {
  // Board state: 9 cells initialized to null
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Determine winner and winning line using memoization for performance
  const { winner, line } = useMemo(() => calculateWinner(squares), [squares]);

  // Determine if draw (all filled and no winner)
  const isDraw = useMemo(() => squares.every(Boolean) && !winner, [squares, winner]);

  const currentPlayer = xIsNext ? 'X' : 'O';

  // PUBLIC_INTERFACE
  const handleSquareClick = (index) => {
    /** Handles a move:
     * - Ignores if the square is filled or the game is over.
     * - Sets X or O and toggles the player.
     */
    if (squares[index] || winner) return;
    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  // PUBLIC_INTERFACE
  const resetGame = () => {
    /** Resets the board and turn to initial state. */
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Build status message
  let statusText = `Next: ${currentPlayer}`;
  let statusClass = 'status';
  if (winner) {
    statusText = `Winner: ${winner}`;
    statusClass = 'status winner';
  } else if (isDraw) {
    statusText = 'Draw';
    statusClass = 'status draw';
  }

  return (
    <section className="game-card" aria-label="Tic Tac Toe Game">
      <header className="game-header">
        <h1 className="game-title">Tic Tac Toe</h1>
        <p className="game-subtitle">Ocean Professional — Two Players</p>
      </header>

      <div className={statusClass} role="status" aria-live="polite">
        {winner ? (
          <>
            <span className="badge">{winner}</span>
            <span>Winner</span>
          </>
        ) : isDraw ? (
          <>It&apos;s a draw</>
        ) : (
          <>
            <span>Next</span>
            <span className="badge">{currentPlayer}</span>
          </>
        )}
      </div>

      <Board
        squares={squares}
        winningLine={line}
        disabled={Boolean(winner) || isDraw}
        onSquareClick={handleSquareClick}
      />

      <div className="controls" aria-label="Game Controls">
        <button type="button" className="btn" onClick={resetGame} aria-label="Reset game and start a new round">
          Reset / New Game
        </button>
      </div>
      <div className="helper" aria-hidden="true">
        Pro tip: Use Tab/Enter or Space to play via keyboard.
      </div>
    </section>
  );
}

export default Game;

/** Helper: Winner detection across 8 lines.
 * Returns { winner: 'X' | 'O' | null, line: number[] | null }
 */
function calculateWinner(sq) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diags
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
      return { winner: sq[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}
