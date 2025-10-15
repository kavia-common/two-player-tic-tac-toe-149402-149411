import React from 'react';
import Square from './Square';

/**
 * PUBLIC_INTERFACE
 * Board renders a 3x3 grid of Square components.
 * Props:
 * - squares: string[] (length 9) values 'X' | 'O' | null
 * - winningLine: number[] | null
 * - disabled: boolean (disable interaction when game over)
 * - onSquareClick: (index: number) => void
 */
function Board({ squares, winningLine, disabled, onSquareClick }) {
  const isWinning = (idx) => Array.isArray(winningLine) && winningLine.includes(idx);

  return (
    <div className="board" role="grid" aria-label="Game board" aria-disabled={disabled}>
      {squares.map((value, idx) => (
        <Square
          key={idx}
          value={value}
          onClick={() => onSquareClick(idx)}
          isWinning={isWinning(idx)}
          disabled={disabled || Boolean(value)}
          index={idx}
        />
      ))}
    </div>
  );
}

export default Board;
