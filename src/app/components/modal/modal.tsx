import { ReactNode, useEffect } from 'react';
import styles from './index.module.scss'

interface IModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: IModalProps): JSX.Element {

    useEffect(() => {
        const handleKeyPress = (event: { key: string; }) => {
            if (event.key === 'Escape') {
                onClose && onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isOpen, onClose]);

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