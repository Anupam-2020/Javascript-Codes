import { useState } from "react";

let initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  let [board, setBoard] = useState(initialBoard());
  let [isXNext, setIsXNext] = useState(true);
  let WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal;
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6], // Diagonal
  ];

  const calculateWinner = (board) => {
    for(let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const [a, b, c] = WINNING_COMBINATIONS[i];
        if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    };
    return null;
  };


  const handleClick = (index) => {
    let newBoard = [...board]; // Create a copy of the board
    // By using `newBoard`, you ensure that the state updates are handled in a way that React can efficiently manage and render.
    if (calculateWinner(newBoard) || newBoard[index]) return; // Check for winner or occupied cell
    newBoard[index] = isXNext ? "X" : "O"; // Update the new board
    setBoard(newBoard); // Set the new board state
    setIsXNext(!isXNext); // Toggle the player
    console.log(calculateWinner(newBoard));
  };

  const getStatusMessage = () => {
    let winner = calculateWinner(board);
    return winner ? `Winner: ${winner}` : `Player ${isXNext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  return { board, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;