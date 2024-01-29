import styles from './index.module.scss'
import { useState } from 'react';

export default function RecipeBook() {
    const [isPageOne, setIsPageOne] = useState<boolean>(true)

    const handlePageChange = () => {
        playOpenSound()
        setTimeout(() => {
            setIsPageOne(!isPageOne)
        }, 1000);
    }

    const playOpenSound = () => {
        const audio = new Audio('/sounds/bookPage.mp3');
        audio.play();
    };

    return (
        <>
            {
                isPageOne ?
                    <>
                        <img className={styles.recetas} src="/characters/cook/recetario1.png" alt="" />
                        <img className={styles.page1} src="/characters/cook/page.png" alt="" onClick={handlePageChange} />
                    </>
                    :
                    <>
                        <img className={styles.recetas} src="/characters/cook/recetario2.png" alt="" />
                        <img className={styles.page2} src="/characters/cook/page.png" alt="" onClick={handlePageChange} />
                    </>
            }
        </>
    );
}