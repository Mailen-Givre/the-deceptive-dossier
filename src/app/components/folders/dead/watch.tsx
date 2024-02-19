import styles from './index.module.scss'

export default function Watch(): JSX.Element {

    return (
        <div className={styles.watch}>
            <img src="/characters/deadWoman/watch.png" alt="" />
            <p>15:14</p>
        </div>
    );
}