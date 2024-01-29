import styles from './index.module.scss'

export default function Photo() {

    return (
        <div className={styles.photoContainer}>
            <img src="/characters/deadWoman/iluminame.jpeg" alt="" />
            <a href="/characters/deadWoman/iluminame2.jpeg" download="iluminame" className={styles.download}></a>
        </div>
    );
}