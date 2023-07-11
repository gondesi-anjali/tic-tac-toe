import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
import { calcWinner } from './components/winner';
import Drawmatch from './components/drawmatch';
import Hist from './components/history';
const newgame = [{ squares: Array(9).fill(null), player: false }];
function App() {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [player, setplayer] = useState(false);
  const [history, sethistory] = useState([
    { squares: Array(9).fill(null), player: false },
  ]);
  const [move, setmove] = useState(0);
  const gameboard = history[move];
  const winner = calcWinner(gameboard.squares);

  const sqclick = clickedpos => {
    if (gameboard.squares[clickedpos] || winner) {
      return;
    }
    sethistory(currenthist => {
      const override = move + 1 !== currenthist.length;
      const prevgamestate = override
        ? currenthist[move]
        : history[history.length - 1];
      const nextgamestate = prevgamestate.squares.map((sqvalue, position) => {
        if (clickedpos === position) {
          return prevgamestate.player ? 'X' : 'O';
        }
        return sqvalue;
      });
      const base = override
        ? currenthist.slice(0, currenthist.indexOf(prevgamestate) + 1)
        : currenthist;
      return base.concat({
        squares: nextgamestate,
        player: !prevgamestate.player,
      });
    });
    setmove(move => move + 1);
  };
  const moveto = mov => {
    setmove(mov);
  };
  const newgamestart = () => {
    sethistory(newgame);
    setmove(0);
  };
  return (
    <div className="app">
      <h1>
        <span className="text-magenta">TIC-TAC-TOE</span>
      </h1>
      <Drawmatch winner={winner} gameboard={gameboard} />
      <Board squares={gameboard.squares} sqclick={sqclick} />
      <button
        type="button"
        onClick={newgamestart}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        START NEW GAME
      </button>
      <Hist history={history} moveto={moveto} move={move} />
    </div>
  );
}

export default App;
// sethistory(currentsq => {
//   return currentsq.map((sqvalue, position) => {
//     if (clickedpos === position) {
//       return player ? 'X' : 'O';
//     }
//     return sqvalue;
