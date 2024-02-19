
import Modal from '../modal/modal';
import styles from './index.module.scss'
import { useState } from 'react';
export const MusicBoxOpened = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <img src="/watch-instructions.jpg" alt="" />
            </Modal>
            <div className={styles.musicBoxOpened}>
                <img onClick={() => setIsOpen(true)} src="/watch-instructions.jpg" alt="" />
            </div>
        </>
    )
}