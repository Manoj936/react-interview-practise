import { useState } from "react";

const initialBlocks = () => Array(9).fill(null);
const useTicTacToe = () => {
  const [blocks, setBlocks] = useState(initialBlocks());
  const [isNextX, setIsNextX] = useState(true);
  const [winner , setWinner] = useState(null)
  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const WINNING_LOGIC = (newBlock) => {
 
    for(let i =0 ; i <WINNING_PATTERN.length ; i++){
      const [a,b,c] =   WINNING_PATTERN[i]
      if(newBlock[a] && newBlock[a] === newBlock[b] && newBlock[a]=== newBlock[c]){
       
        //Winner
        setWinner(newBlock[a])
        return fetchMessage()
      }
    }
  };

  const RESET_GAME = () => {
    setBlocks(initialBlocks());
    setIsNextX(true);
    setWinner(null)
  };

  const fetchMessage = () => {
    if (winner !==null ) {
      return `Player ${winner} Wins. Please reset to play again`;
    } else if (blocks.every((item) => item !== null) && !winner) {
      return `Match Draw`;
    } else {
      return `Player ${isNextX ? "X" : "O"} Turn`;
    }
  };

  const HANDLE_CLICk = (index) => {
    if (blocks[index] || winner) {
      return 
    } else {
      blocks[index] = isNextX ? "X" : "O";
      setIsNextX(!isNextX);
    }
   WINNING_LOGIC(blocks);
  };

  return { blocks, WINNING_LOGIC, RESET_GAME, HANDLE_CLICk, fetchMessage };
};
export default useTicTacToe;
