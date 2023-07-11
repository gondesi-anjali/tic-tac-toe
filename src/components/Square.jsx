const Square = ({ value, byclick }) => {
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'text-green' : 'text-orange'}`}
      onClick={byclick}
    >
      {value}
    </button>
  );
};
export default Square;
