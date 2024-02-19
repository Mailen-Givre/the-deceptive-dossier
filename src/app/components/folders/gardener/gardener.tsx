
import { useState } from 'react';
import Modal from '../../modal/modal';
import styles from './index.module.scss'
import Potion from './potion';

export default function Gardener(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [object, setObject] = useState<string>('')
    const [isSorted, setIsSorted] = useState<boolean>(false)
    const [flowers, setFlowers] = useState<number[]>([0, 0, 0, 0, 0])

    const gardenerProfile = "El jardinero. Cuidaba las plantas del jardín y de la casa. A Miss A.Lee le gustaba unas flores en particular."

    const potions = "Estos eran los productos que usaba para las flores, algunos eran tóxicos."

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
                {object === 'potions' &&
                    <Potion
                        setIsSorted={setIsSorted}
                        isSorted={isSorted}
                        flowers={flowers}
                        setFlowers={setFlowers}
                    ></Potion>}
            </Modal>
            <div className={styles.characterFile}>
                <div>
                    <img src="/characters/gardener/gardener.png" alt="" />
                    <p>{gardenerProfile}</p>
                </div>
                <div className={styles.objects} onClick={() => { handleModal('potions') }}>
                    <img src="/characters/gardener/potions.png" alt="" />
                    <p>{potions}</p>
                </div>
            </div >
        </>
    );
}
