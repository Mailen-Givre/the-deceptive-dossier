

import styles from './index.module.scss'

interface ICulpritProps {
    culprit: string,
    name: string,
    handleCulprit: (culprit: string) => void
    isSelected: boolean
}


export const Culprit = ({ culprit, name, handleCulprit, isSelected }: ICulpritProps) => {

    return (

        <div className={`${styles.culprit} ${isSelected ? styles.culpritSelected : ''}`} onClick={() => handleCulprit(culprit)}>
            <img src={`/characters/${culprit}/${culprit}.png`} alt="" />
            <p>{name}</p>
        </div>
    )
}