
import { useState } from 'react';
import Modal from '../../modal/modal';
import styles from './index.module.scss'
import Plan from './plan';
import RecipeBook from './recipeBook';
import Ticket from './ticket';

export default function Cook() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [object, setObject] = useState<string>('')

    const cookProfile = "El cocinero. Era nuevo, le preparaba todas las comidas."

    const plan = "Plan semanal de las meriendas."
    const recipeBook = "Recetario con todos los ingredientes de las preparaciones."
    const ticket = "Ticket del día que falleció, los ingredientes estan tachados."

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
                {object === 'plan' && <Plan></Plan>}
                {object === 'recipeBook' && <RecipeBook></RecipeBook>}
                {object === 'ticket' && <Ticket></Ticket>}
            </Modal>
            <div className={styles.characterFile}>
                <div>
                    <img src="/characters/cook/cook.png" alt="" />
                    <p>{cookProfile}</p>
                </div>
                <div className={styles.objects}>
                    <img style={{ height: '15rem', width: 'auto' }} src="/characters/cook/plan.jpeg" alt="" onClick={() => { handleModal('plan') }} />
                    <p>{plan}</p>
                </div>
                <div className={styles.objects} onClick={() => { handleModal('recipeBook') }}>
                    <img src="/characters/cook/recetas.png" alt="" />
                    <p>{recipeBook}</p>
                </div>
                <div className={styles.objects} onClick={() => { handleModal('ticket') }}>
                    <img src="/characters/cook/ticket1.png" alt="" style={{ height: '10rem', width: 'auto' }} />
                    <p>{ticket}</p>
                </div>
            </div >
        </>
    );
}
