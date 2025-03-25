import "./App.css";
import useTicTacToe from "./hooks/useTikTacToe";

function App() {
  let { board, handleClick, getStatusMessage, resetGame } =
    useTicTacToe();
  return (
    <div className="Game">
      <div className="Status">
        <h3>{getStatusMessage()}</h3>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div className="Board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="Cell"
            onClick={() => handleClick(index)}
            disabled = {cell || null}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
