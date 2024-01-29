import { useState } from 'react';
import styles from './index.module.scss'
import { actualPassword } from '@/app/answers';

interface IStartScreenProps {
    setStartIsLock: (startIsLock: boolean) => void
}

export default function StartScreen({ setStartIsLock }: IStartScreenProps) {
    const [isHint, setIsHint] = useState<boolean>(false)
    const [isShown, setIsShown] = useState<boolean>(false)

    const hint = 'Pista: El principio de cada solsticio, el final de cada caos, la punta de cada sistema, el centro del oasis.'

    const handlePassword = (e: any) => {
        if (e.key === 'Enter') {
            const password = e.target.value
            checkPassword(password)
        }
    }

    const checkPassword = (password: string) => {
        if (password === actualPassword) {
            setStartIsLock(false)
        }
    }

    return (
        <div className={styles.start}>
            <h5>Por favor, ingrese una contraseña</h5>
            <div className={styles.inputs}>
                {isShown ?
                    <input type="text" onKeyUp={(e) => handlePassword(e)} /> :
                    <input type="password" onKeyUp={(e) => handlePassword(e)} />
                }
                {isShown ?
                    <img src="/hidden.png" alt="" onClick={() => setIsShown(false)} /> :
                    <img src="/seen.png" alt="" onClick={() => setIsShown(true)} />}
            </div>
            {!isHint ? <p onClick={() => setIsHint(true)}>No me acuerdo la contraseña</p> :
                <h6>{hint}</h6>
            }
        </div>
    );
}