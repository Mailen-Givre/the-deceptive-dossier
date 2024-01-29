
import { useState } from 'react';
import Modal from '../../modal/modal';
import styles from './index.module.scss'
import ColorMixer from './color-mixer/colorMixer';
import DyeNotebook from './notebook/notebook';

export default function Coiffeur() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [object, setObject] = useState<string>('')

    const coiffeurProfile = "La peluquera. Es extranjera, no habla español. Se encargaba de cortarle el pelo y teñirselo siempre del mismo color. Le teñía el pelo todas las mañanas."

    const dyeBox = "La caja de las tinturas donde preparaba los colores con sus respectivos nombres."
    const colorList = "Lista de los colores que prepataba. Justo ese día empezó a usar una marca nueva y algunos colores eran tóxicos, los marcó pero no entiendo cuáles son."

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
                {object === 'box' && <ColorMixer></ColorMixer>}
                {object === 'notebook' && <DyeNotebook></DyeNotebook>}
            </Modal>
            <div className={styles.characterFile}>
                <div>
                    <img src="/characters/coiffeur/coiffeur.png" alt="" />
                    <p>{coiffeurProfile}</p>
                </div>
                <div className={styles.objects}>
                    <img src="/characters/coiffeur/dye-box.png" alt="" onClick={() => { handleModal('box') }} />
                    <p>{dyeBox}</p>
                </div>
                <div className={styles.objects} onClick={() => { handleModal('notebook') }}>
                    <img src="/characters/coiffeur/dye-notebook.png" alt="" />
                    <p>{colorList}</p>
                </div>
            </div>
        </>
    );
}
