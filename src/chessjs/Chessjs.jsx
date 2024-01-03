import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function Game() {
  const [game, setGame] = useState(new Chess());
  const startListening = () => SpeechRecognition.startListening({continuous:true, language: 'en-US'})
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
    return document.getElementById("moveStart").value 
  }

  function trgSquare() {
    return document.getElementById("moveEnd").value 
  }

  function setStartSquare() {
    let myJSON = JSON.stringify({transcript}) // round-a-bout way to convert transcript obj to string
    let myObj = JSON.parse(myJSON) // first convert to json string then to javascript object
    return document.getElementById("moveStart").value = myObj.transcript.toLowerCase()
  }

  function setEndSquare() {
    let myJSON = JSON.stringify({transcript})
    let myObj = JSON.parse(myJSON)
    return document.getElementById("moveEnd").value = myObj.transcript.toLowerCase()
  }

  return (
  <div>
    {transcript}
    <br/>
    <label htmlFor="choosePiece">PROMOTE</label>
    <select onChange="promote()" id="choosePiece">
      <option value="q">Queen</option>
      <option value="r">Rook</option>
      <option value="b">Bishop</option>
      <option value="n">Knight</option>
    </select>

    <button onClick={startListening}>Start Listening</button>
    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button> 
    <button onClick={resetTranscript}>Reset</button>

    <input type="text" id="moveStart" placeholder="Enter a square e.g. d4" />
    <input type="text" id="moveEnd" placeholder="Enter a square e.g. d4" />
    <button onClick={setStartSquare}>Confirm Start Square</button>
    <button onClick={setEndSquare}>Confirm End Square</button>
    <button onClick={onDrop}>Submit Move</button>

    <Chessboard position={game.fen()} onPieceDrop={onDrop} />
  </div> 
  );
}