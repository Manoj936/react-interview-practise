
import React, { useState } from 'react'
import useTicTacToe from '../hooks/UseTicTacToe';

export default function TicTacToe() {
   const {blocks, WINNING_LOGIC, RESET_GAME, HANDLE_CLICk, fetchMessage  } = useTicTacToe()
    return (
        <>
        <div className="container">
            <h2>
              {fetchMessage()}  
            </h2>
          <button className="reset" onClick={RESET_GAME}>Reset</button>
          <div className="game">
            {blocks.map((b, index) => {
              return <button 
              onClick={()=>HANDLE_CLICk(index)}
              className="blocks" disabled={b!==null} key={index}>{b}
              </button>;
            })}
          </div>
        </div>
      </>
      )
}
