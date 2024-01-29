import styles from './index.module.scss'
import { useState } from 'react';
import Modal from '../../modal/modal';
import { Guess } from '../../guess/guess';

export default function Cover() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.cover}>
            <h1>Dossier de investigación</h1>
            <button className={styles.guessButton} onClick={() => (setIsOpen(true))}>Adivinar que pasó</button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <Guess></Guess>
            </Modal>
        </div >
    );
}