import { useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./components/HangmanDrawing/HangmanDrawing "
import { HangmanWord } from "./components/HangmanWord/HangmanWord"
import { Keyboard } from "./components/Keyboard/Keyboard"

function App() {

  const[wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
  const[guessedLetters,setGuessedLetters] = useState<string[]>([])
  
  return (
    <div
      style={{
        maxWidth: "800px",
        display:"flex",
        flexDirection:"column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
      }}>

      <div style={{fontSize: "2rem"}}> Win Lose</div>

      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App
