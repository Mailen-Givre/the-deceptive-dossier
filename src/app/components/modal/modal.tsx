import { ReactNode } from 'react';
import styles from './index.module.scss'

interface IModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: IModalProps) {

    return (
        <>
            {isOpen && (
                <div style={{ position: 'relative' }}>
                    <div className={styles.overlay} onClick={onClose}></div>
                    <div className={styles.modal}>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}