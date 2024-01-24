import KEYS from "./Keys"
import styles from "./Keyboard.module.css"

export function Keyboard() {
    
    return <div className={styles.keyboard}>
        {KEYS.map(key =>{
            return(
                <button key={key} className={`${styles.btn}`}>{key}</button>
            )
        })}
    </div>
}