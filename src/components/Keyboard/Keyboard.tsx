import KEYS from "./Keys"
import styles from "./Keyboard.module.css"

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({
    activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps
) {

    return <div className={styles.keyboard}>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return (
                <button
                    onClick={() => addGuessedLetter(key)}
                    className={`${styles.btn} 
                    ${isActive ? styles.active : ""}
                    ${isInactive ? styles.inactive : ""}`}
                    disabled = {isActive || isInactive}
                    key={key}
                    >
                        {key}</button>
            )
        })}
    </div>
}