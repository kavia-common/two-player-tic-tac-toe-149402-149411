import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Square component renders a single cell button in the board.
 * Props:
 * - value: 'X' | 'O' | null
 * - isWinning: boolean (applies highlight when part of a winning line)
 * - disabled: boolean (disabled when filled or game over)
 * - index: number (for accessibility label)
 * - onClick: () => void
 */
function Square({ value, isWinning, disabled, index, onClick }) {
  const label = value
    ? `Cell ${index + 1}, ${value}`
    : `Cell ${index + 1}, empty`;

  const classes = [
    'square',
    value === 'X' ? 'x' : '',
    value === 'O' ? 'o' : '',
    isWinning ? 'win' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      role="gridcell"
    >
      {value}
    </button>
  );
}

export default Square;
