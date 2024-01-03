import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function Game() {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: promote()
    });

    // illegal move
    if (move === null) return false;
    return true;
  }

  function promote() {
    return document.getElementById("choosePiece").value   
  }

  return (
  <div>
    <label htmlFor="choosePiece">PROMOTE</label>
    <select onChange="promote()" id="choosePiece">
      <option value="q">Queen</option>
      <option value="r">Rook</option>
      <option value="b">Bishop</option>
      <option value="n">Knight</option>
    </select>
    <Chessboard position={game.fen()} onPieceDrop={onDrop} />
  </div> 
  );
}