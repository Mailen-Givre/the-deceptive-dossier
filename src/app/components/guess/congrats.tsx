
import styles from './index.module.scss'
import Confetti from 'react-confetti'


export const Congrats = (): JSX.Element => {

    return (

        <div className={styles.congrats}>
            <Confetti
                width={2000}
                height={2000}
            />
            <h2>¡Felicidades!</h2>
        </div>
    )
}