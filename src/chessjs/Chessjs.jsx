import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import "./chessjs.css"

export default function Game() {
  const [game, setGame] = useState(new Chess());
  const startListening = () => SpeechRecognition.startListening({continuous:true, language: 'en-US'})
  const stopListening = () => SpeechRecognition.stopListening()
  const {transcript, resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition()
  
  if (!browserSupportsSpeechRecognition) {
      console.log("not supported")
      return null
  }

  function makeAMove(move) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: srcSquare(),
      to: trgSquare(),
      promotion: promote()
    });

    // illegal move
    if (move === null) return false;
    return true;
  }

  function promote() {
    return document.getElementById("choosePiece").value   
  }

  function srcSquare() {
    let myJSON = JSON.stringify({transcript}) // round-a-bout way to convert transcript obj to string
    let myObj = JSON.parse(myJSON) // first convert to json string then to javascript object
    let myArr = myObj.transcript.split(" ")
    return myArr[0].toLowerCase()
  }

  function trgSquare() {
    let myJSON = JSON.stringify({transcript})
    let myObj = JSON.parse(myJSON)
    let myArr = myObj.transcript.split(" ")
    return myArr[1].toLowerCase()
  }

  return (
  <div>
    <div class="fboxcontainer">
      <div class="leftcol">
        <h3>Voice Chess</h3>
        <p>
          To move a piece, say the coordinates of the starting square 
          followed by the target square.
          <br/>
          <br/>
          For example, you might make your first move by saying: "E2 E4"
        </p>
        <div class="transcriptbox">
          {transcript}
        </div>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={stopListening}>Stop Listening</button> 
        <button onClick={resetTranscript}>Reset</button>
        <button onClick={onDrop}>Submit Move</button>
      </div>

      <div>
        <label htmlFor="choosePiece">Promote </label>
        <select onChange="promote()" id="choosePiece">
          <option value="q">Queen</option>
          <option value="r">Rook</option>
          <option value="b">Bishop</option>
          <option value="n">Knight</option>
        </select>
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
    </div>
    
  </div> 
  );
}