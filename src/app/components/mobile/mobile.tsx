import { useState, useEffect } from 'react';
import Piano from './piano/piano';
import styles from './index.module.scss'
import Modal from '../modal/modal';
import { GalleryPhotos } from './gallery/gallery';
import PatternLock from "react-pattern-lock";
import { correctPattern } from '@/app/answers';
import { Supermarket } from './supermarket/supermarket';

interface IMobileProps {
    setIsLock: (isLock: boolean) => void,
    isLock: boolean
}

export default function Mobile({ setIsLock, isLock }: IMobileProps): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [app, setApp] = useState<string>('')
    const [state, setState] = useState<number[]>([])
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<string>('');
    const [isTicket, setIsTicket] = useState<boolean>(false)
    const [caeInput, setCaeInput] = useState<string>('')

    const onClose = () => {
        setIsOpen(false)
    }

    const checkIfPattern = () => {
        const arraysAreEqual = JSON.stringify(correctPattern) === JSON.stringify(state);
        arraysAreEqual ? setIsSuccess(true) : setIsError(true)
        setTimeout(() => {
            clearState()
            setIsError(false)
            setIsSuccess(false)
            if (arraysAreEqual) {
                playOpenSound()
                setIsLock(false)
            }
        }, 1500);

    }

    const playOpenSound = () => {
        const audio = new Audio('/sounds/unlock.mp3');
        audio.play();
    };

    const clearState = () => {
        setState([])
    }

    const handleModal = (appName: string) => {
        setIsOpen(true)
        setApp(appName)
    }

    const getFormattedTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    useEffect(() => {
        let intervalId: NodeJS.Timeout
        if (!isOpen) {
            intervalId = setInterval(() => {
                setCurrentTime(getFormattedTime());
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isOpen]);

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                {app === 'piano' && <Piano></Piano>}
                {app === 'gallery' && <GalleryPhotos></GalleryPhotos>}
                {app === 'supermarket' &&
                    <Supermarket
                        isTicket={isTicket}
                        setIsTicket={setIsTicket}
                        caeInput={caeInput}
                        setCaeInput={setCaeInput}
                    ></Supermarket>}
                {/* {app === 'sudoku' && <Sudoku></Sudoku>} */}
            </Modal>
            <div className={styles.textile}>
                <div
                    className={styles.mobile}
                    style={{
                        backgroundImage: `url(${isLock ? '/phone-lock.png' : '/phone.png'})`
                    }}>
                    {isLock ? (
                        <div className={styles.lockScreen}>
                            <p>{currentTime}</p>

                            <PatternLock
                                success={isSuccess}
                                error={isError}
                                width={300}
                                pointSize={15}
                                size={3}
                                path={state}
                                onChange={(pattern) => {
                                    setState(pattern);
                                }}
                                onFinish={() => {
                                    checkIfPattern()
                                }}
                            />
                        </div>
                    ) :
                        (
                            <div className={styles.icons}>
                                <img
                                    className={styles.interactive}
                                    src="/mobile-icons/gallery.png"
                                    alt="gallery"
                                    onClick={() => { handleModal('gallery') }} />
                                <img
                                    src="/mobile-icons/whatsapp.webp"
                                    alt="whatsapp" />
                                <img
                                    src="/mobile-icons/spotify.webp"
                                    alt="spotify" />
                                <img
                                    className={styles.interactive}
                                    src="/mobile-icons/piano.png"
                                    alt="piano"
                                    onClick={() => { handleModal('piano') }} />
                                <img
                                    src="/mobile-icons/google-maps.png"
                                    alt="google-maps" />
                                <img
                                    className={styles.interactive}
                                    src="/mobile-icons/supermarket.png"
                                    alt="supermarket"
                                    onClick={() => { handleModal('supermarket') }} />
                                <img
                                    // className={styles.interactive}
                                    src="/mobile-icons/sudoku.png"
                                    alt="sudoku"
                                // onClick={() => { handleModal('sudoku') }} 
                                />
                                <img
                                    src="/mobile-icons/instagram.png"
                                    alt="instagram" />
                            </div>
                        )
                    }
                </div>
            </div >
        </>
    );
}