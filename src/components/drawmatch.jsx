const Drawmatch = ({ winner, gameboard }) => {
  const { squares, player } = gameboard;
  const nomoves = squares.every(sqvalue => sqvalue !== null);
  const nextplayer = player ? 'X' : 'O';
  const thedrawmatch = () => {
    if (winner) {
      return (
        <h2>
          WINNER IS{' '}
          <span className={player ? 'text-orange' : 'text-green'}>
            {winner}
          </span>
        </h2>
      );
    }
    if (!winner && nomoves) {
      return <h2>ITS A DRAW MATCH</h2>;
    }
    if (!winner && !nomoves) {
      return (
        <h3>
          NEXT PLAYER IS{' '}
          <span className={player ? 'text-green' : 'text-orange'}>
            {' '}
            {nextplayer}
          </span>
        </h3>
      );
    }
    return null;
  };
  return <div>{thedrawmatch()}</div>;
};
export default Drawmatch;
