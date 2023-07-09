const Square = ({ value, byclick }) => {
  return (
    <button type="button" className="square" onClick={byclick}>
      {value}
    </button>
  );
};
export default Square;
