import { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setplayer] = useState(false);
  const sqclick = clickedpos => {
    if (squares[clickedpos]) {
      return;
    }
    setSquares(currentsq => {
      return currentsq.map((sqvalue, position) => {
        if (clickedpos === position) {
          return player ? 'X' : 'O';
        }
        return sqvalue;
      });
    });
    setplayer(currentplayer => !currentplayer);
  };
  const thesquares = position => {
    return (
      <Square value={squares[position]} byclick={() => sqclick(position)} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {thesquares(0)}
        {thesquares(1)}
        {thesquares(2)}
      </div>
      <div className="board-row">
        {thesquares(3)}
        {thesquares(4)}
        {thesquares(5)}
      </div>
      <div className="board-row">
        {thesquares(6)}
        {thesquares(7)}
        {thesquares(8)}
      </div>
    </div>
  );
};
export default Board;

// <Square value={squares[8]} byclick={() => sqclick(8)} />
