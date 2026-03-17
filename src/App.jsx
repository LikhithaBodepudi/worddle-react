import React,{useState,useEffect} from "react";
import { WORDS } from "./words";
import Cell from "./components/Cell";
import "./styles.css";

const WORD_LENGTH=5;
const MAX_GUESSES=6;

export default function App(){

  const [secretWord,setSecretWord]= useState("");
  const [guesses,setGuesses]=useState([]);
  const [currentGuess,setCurrentGuess]=useState("");
  const [gameOver,setGameOver]=useState(false);
  const [message,setMessage]=useState("");

  // to set a randomword from words file as a secretword or the answer of the worddle
  useEffect(()=>{
    const randomWord=WORDS[Math.floor(Math.random()*WORDS.length)];
    setSecretWord(randomWord);
  },[])

  //keyboard event listner
  useEffect(()=>{
    const handleKeyPress=(e)=>{
       if(gameOver) return;
       const key= e.key.toUpperCase();

       if(e.key.length==1 && key>="A" && key<="Z"){
        if(currentGuess.length<WORD_LENGTH){
          setCurrentGuess(prev=>prev+key);
        }
       }

       if(e.key==="Backspace"){
        setCurrentGuess(prev=>prev.slice(0,-1));
       }

       if(e.key==="Enter"){ 
        if (currentGuess.length === WORD_LENGTH) {
          submitGuess();
        }
       }
    };

     window.addEventListener("keydown", handleKeyPress);

     return () => {
      window.removeEventListener("keydown", handleKeyPress);
     };

  },[currentGuess,gameOver]);

  const handleInputChange=(e)=>{
    if(gameOver) return;
    setCurrentGuess(e.target.value.toUpperCase().slice(0,WORD_LENGTH));
  };

  const resetGame = () => {

  const randomWord =
    WORDS[Math.floor(Math.random() * WORDS.length)];

  setSecretWord(randomWord);
  setGuesses([]);
  setCurrentGuess("");
  setGameOver(false);
  setMessage("");

};

  const submitGuess=()=>{
   
    if(currentGuess.length!=WORD_LENGTH) return;

    const newGuesses=[...guesses,currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");

    if(secretWord==currentGuess){
      setMessage("You Won the Game,Congrats!");
      setGameOver(true);
    }
    else if(newGuesses.length>=MAX_GUESSES){
      setMessage("You lost! Word was "+secretWord);
      setGameOver(true);
    }
  };

  const getColors = (guess, secret) => {
  const result = Array(WORD_LENGTH).fill("lightcoral");
  const secretPool = secret.split(""); // tracks remaining unmatched letters

  // Pass 1: greens
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === secret[i]) {
      result[i] = "green";
      secretPool[i] = null; // consume this letter
    }
  }

  // Pass 2: yellows
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] === "green") continue; // already matched
    const poolIndex = secretPool.indexOf(guess[i]);
    if (poolIndex !== -1) {
      result[i] = "gold";
      secretPool[poolIndex] = null; // consume so it can't be reused
    }
  }

  return result; // e.g. ["green", "lightCoral", "gold", "lightCoral", "lightCoral"]
};

  const renderGrid = () => {
  const cells = [];
  for (let row = 0; row < MAX_GUESSES; row++) {
    let guess = guesses[row] || "";

    if (row === guesses.length) {
      guess = currentGuess;
    }

    const isCurrentRow = row === guesses.length;

    let colors =  Array(WORD_LENGTH).fill("");

    // Only apply colors to submitted guesses
    if (row < guesses.length) {
      colors = getColors(guess, secretWord);
    }

    for (let col = 0; col < WORD_LENGTH; col++) {
      const letter = guess[col] || "";
      cells.push(
        <Cell key={`${row}-${col}`} letter={letter} color={colors[col]} isCurrentRow={isCurrentRow} />
      );
    }
  }
  return cells;
};

  return(
    <div className='app-container'>
      <h1>Wordle Clone</h1>

      <p>Type letters on your keyboard and press Enter</p>

      <div className="grid">
        {renderGrid()}
      </div>

      

      {message && (<h2 className="message">{message}</h2>)}

      <button onClick={resetGame} className="reset">New Game</button>
    </div>
  );
}
