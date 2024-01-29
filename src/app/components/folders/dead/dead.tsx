
import { useState } from 'react';
import styles from './index.module.scss'
import Watch from './watch';
import Photo from './photo';
import Modal from '../../modal/modal';

export default function Dead() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [object, setObject] = useState<string>('')

    const deadProfile = "La mujer que falleció."
    const deadProfile2 = "Tengo que descubrir quién fue. No queda claro cómo ocurrió ni cuándo pasó."
    const deadProfile3 = "Poseo su celular y una cajita musical que pareciera contener algo dentro."

    const photo = "Esta foto dice tener la clave del celular, pero esta muy oscura como para ver algo."
    const watch = "El reloj que tenia puesto, su hora se detuvo."

    const onClose = () => {
        setIsOpen(false)
    }

    const handleModal = (object: string) => {
        setObject(object)
        setIsOpen(true)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                {object === 'photo' && <Photo></Photo>}
                {object === 'watch' && <Watch></Watch>}
            </Modal>
            <div className={styles.characterFile}>
                <div>
                    <img src="/characters/deadWoman/the-dead-gray.png" alt="" />
                    <p>{deadProfile}</p>
                    <p>{deadProfile2}</p>
                    <p>{deadProfile3}</p>
                </div>
                <div className={styles.objects}>
                    <img className={styles.photo} src="/characters/deadWoman/photo.jpeg" alt="" onClick={() => { handleModal('photo') }} />
                    <p>{photo}</p>
                </div>
                <div className={styles.objects} onClick={() => { handleModal('watch') }}>
                    <img src="/characters/deadWoman/watch.png" alt="" />
                    <p>{watch}</p>
                </div>
            </div >
        </>
    );
}
