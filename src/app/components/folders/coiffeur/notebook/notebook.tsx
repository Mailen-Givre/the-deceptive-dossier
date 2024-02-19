
import { mixedColors } from '../color-mixer/mixedColors';
import styles from './index.module.scss'

export default function DyeNotebook(): JSX.Element {

    return (
        <div className={styles.dyeNotebook}>
            {mixedColors.map((color, index) => (
                <div key={index}>
                    <p> {color.codeName}</p>
                    {color.isToxic && <img src="/characters/coiffeur/toxic.png" alt="" />}
                </div >
            ))
            }
        </div >
    );
}
