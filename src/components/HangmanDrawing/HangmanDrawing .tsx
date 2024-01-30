import BODY_PARTS from "./BodyParts"
import styles from './HangmanDrawing.module.css'

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing(
    {numberOfGuesses}:HangmanDrawingProps
    ) {
 
    return <div style={{position:"relative"}}>
        {BODY_PARTS.slice(0,numberOfGuesses)}
        <div className={styles.rope}/>
        <div className={styles.verticalLine}/>
        <div className={styles.horizontalLine}/>
        <div className={styles.base}/>
    </div>
}