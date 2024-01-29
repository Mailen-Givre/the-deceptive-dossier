import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { sortedFlowers } from '@/app/answers'

interface IPotionProps {
    isSorted: boolean,
    setIsSorted: (isSorted: boolean) => void
    flowers: number[],
    setFlowers: (flowers: number[]) => void
}
export default function Potion({ isSorted, setIsSorted, flowers, setFlowers }: IPotionProps) {
    const blueBell = "/characters/gardener/blue-bell.jpeg"
    const sunflower = "/characters/gardener/sunflower.jpeg"
    const hibiscus = "/characters/gardener/hibiscus.jpeg"
    const courgette = "/characters/gardener/courgette.jpeg"
    const liliac = "/characters/gardener/liliac.jpeg"

    const allFlowers = [liliac, courgette, sunflower, blueBell, hibiscus]

    const handleFlower = (index: number, flower: number) => {
        if (!isSorted) {
            const newFlowers = [...flowers];
            newFlowers[index] = flower >= 4 ? 0 : flower + 1
            setFlowers(newFlowers)
            setIsSorted(JSON.stringify(sortedFlowers) === JSON.stringify(newFlowers))
        }
    }

    useEffect(() => {
        if (isSorted) {
            setFlowers(sortedFlowers)
        }
    }, [isSorted])

    return (
        <div className={styles.potionsContainer}>
            {isSorted ?
                <img src="/characters/gardener/potions-toxic.png" alt="" /> :
                <img src="/characters/gardener/potions.png" alt="" />
            }
            <div className={styles.flowers}>
                {flowers.map((flower, index) => (
                    <img key={index}
                        className={`${!isSorted ? styles.selectFlower : ''}`}
                        src={allFlowers[flower]}
                        alt=""
                        onClick={() => handleFlower(index, flower)} />
                ))}
            </div>
            {
                !isSorted &&
                <>
                    <h4>Cada botella corresponde a una flor, pero las etiquetas se perdieron, el jardinero me dijo que:</h4>
                    <div className={styles.potionsRiddle}>
                        <p><img src={hibiscus} /> está al lado de <img src={courgette} />.</p>
                        <p><img src={sunflower} /> está entre 2 botellas.</p>
                        <p><img src={blueBell} /> está en una punta.</p>
                        <p><img src={hibiscus} /> está en un lugar impar.</p>
                        <p><img src={sunflower} /> no está al lado de <img src={liliac} />.</p>
                        <p><img src={liliac} /> está al lado de 1 sola botella.</p>
                        <p><img src={courgette} /> no está en segundo lugar.</p>
                        <p><img src={sunflower} /> antes que <img src={hibiscus} />.</p>
                    </div>
                </>
            }
        </div>
    );
}