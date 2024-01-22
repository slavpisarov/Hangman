import { useState } from "react"
import words from "./wordList.json"

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
      <h1>Test</h1>
    </div>
  )
}

export default App
