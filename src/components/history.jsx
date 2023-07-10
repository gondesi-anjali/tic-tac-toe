const Hist = ({ history, moveto, move }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${move === index ? 'active' : ''}`}
              onClick={() => moveto(index)}
            >
              {index === 0 ? 'NEW GAME' : `GO TO MOVE #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Hist;
