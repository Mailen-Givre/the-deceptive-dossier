
import { useState } from 'react';
import Modal from '../../modal/modal';
import styles from './index.module.scss'
import ClinicalRecord from './clinicalRecord';
import Medicine from './medicine';

export default function Doctor(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [object, setObject] = useState<string>('')

    const doctorProfile = "El médico personal, cuidaba la salud de Miss A.Lee."

    const clinicalRecord = "Historia clínica de la víctima."
    const medicine = "Medicamentos que tomaba la difunta, los preparaba la médica. Así estaba la caja al comienzo de la semana."

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
                {object === 'clinicalRecord' && <ClinicalRecord></ClinicalRecord>}
                {object === 'medicine' && <Medicine></Medicine>}
            </Modal>
            <div className={styles.characterFile}>
                <div>
                    <img src="/characters/doctor/doctor.png" alt="" />
                    <p>{doctorProfile}</p>
                </div>
                <div className={styles.objects}>
                    <img className={styles.medicalRecord} src="/characters/doctor/medical-record.jpeg" alt="" onClick={() => { handleModal('clinicalRecord') }} />
                    <p>{clinicalRecord}</p>
                </div>
                <div className={styles.objects} onClick={() => { handleModal('medicine') }}>
                    <img src="/characters/doctor/medicine.png" alt="" />
                    <p>{medicine}</p>
                </div>
            </div >
        </>
    );
}
