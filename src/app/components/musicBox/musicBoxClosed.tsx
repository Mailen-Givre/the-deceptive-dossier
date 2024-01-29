import { useEffect, useState } from 'react';
import { LetterPicker } from './letterPicker/letterPicker'
import styles from './index.module.scss'
import { musicBoxCode } from '@/app/answers';

interface IMusicBoxClosedProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MusicBoxClosed = ({ setIsOpen }: IMusicBoxClosedProps) => {
    const [letters, setLetters] = useState<string[]>(Array(7).fill(""))

    useEffect(() => {
        const backgroundSound = new Audio('/sounds/twinkle.m4a');
        backgroundSound.loop = true;
        backgroundSound.play();

        return () => {
            backgroundSound.pause();
            backgroundSound.currentTime = 0;
        };
    }, []);

    const playOpenSound = () => {
        const audio = new Audio('/sounds/box-opening.mp3');
        audio.play();
        setTimeout(() => {
            setIsOpen(true)
        }, 1500);
    };

    const checkIfRight = (letters: string[]) => {
        if (letters.length !== musicBoxCode.length) {
            return false;
        }
        const check = letters.every((element: string, index: number) => element === musicBoxCode[index]);
        if (check) playOpenSound()
    }

    useEffect(() => {
        checkIfRight(letters)
    }, [letters])


    return (
        <div className={styles.musicBoxClosed}>
            <div className={styles.letterContainer}>
                {letters && letters.length > 0 && letters.map((letter, index) => (
                    <LetterPicker key={index} setLetters={setLetters} index={index} value={letter} />
                ))}
            </div>
        </div>
    )
}