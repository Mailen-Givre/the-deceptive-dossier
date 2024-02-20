import { useState } from 'react';
import styles from './index.module.scss'
import { actualPassword, passwordSentence, passwordSentenceLong } from '@/app/answers';

interface IStartScreenProps {
    setStartIsLock: (startIsLock: boolean) => void
}

export default function StartScreen({ setStartIsLock }: IStartScreenProps): JSX.Element {
    const [isHint, setIsHint] = useState<boolean>(false)
    const [isShown, setIsShown] = useState<boolean>(false)
    const [isInvalid, setIsInvalid] = useState<boolean>(false)
    const [password, setPassword] = useState('');

    const hint = 'Pista: El principio de cada solsticio, el final de cada caos, la punta de cada sistema, el centro del oasis.'

    const handlePassword = (e: any) => {
        if (e.key === 'Enter') {
            const password = e.target.value
            checkPassword(password)
        }
    }

    const checkPassword = (pass: string) => {
        const formatedPassword = pass.split(" ").join("").toLowerCase()
        if ([actualPassword, passwordSentence, passwordSentenceLong].includes(formatedPassword)) {
            setStartIsLock(false)
        } else {
            setIsInvalid(true)
        }
    }

    return (
        <div className={styles.start}>
            <h5>Por favor, ingrese una contraseña</h5>
            {/* <div className={styles.inputs}>
                {isShown ?
                    <input type="text" onKeyUp={(e) => handlePassword(e)} onChange={(e) => { setPassword(e.target.value) }} /> :
                    <input type="password" onChange={(e) => { setIsInvalid(false), setPassword(e.target.value) }} onKeyUp={(e) => handlePassword(e)} />
                }
                {isShown ?
                    <img src="/hidden.png" alt="" onClick={() => setIsShown(false)} /> :
                    <img src="/seen.png" alt="" onClick={() => setIsShown(true)} />}
                <button className={styles.enterButton} role="button" onClick={() => checkPassword(password)}>Ingresar</button>
            </div> */}
            <div className={styles.inputContainer}>
                <div className={styles.inputs}>
                    {isShown ?
                        <img src="/hidden.png" alt="" onClick={() => setIsShown(false)} /> :
                        <img src="/seen.png" alt="" onClick={() => setIsShown(true)} />}
                    <input type={isShown ? "text" : "password"} onKeyUp={(e) => handlePassword(e)} onChange={(e) => { setPassword(e.target.value) }} />

                </div>
                <button className={styles.enterButton} role="button" onClick={() => checkPassword(password)}>Ingresar</button>
            </div>


            {isInvalid && <p className={styles.invalidPassword}>Contraseña inválida. Intente de nuevo.</p>}
            {!isHint ? <p className={styles.forgotPassword} onClick={() => setIsHint(true)}>No me acuerdo la contraseña</p> :
                <h6>{hint}</h6>
            }
        </div>
    );
}