
import styles from './index.module.scss'

interface IArrowProps {
    isLeft: boolean,
    numberPage: number
    setPage: (page: number) => void
}

export const Arrow = ({ isLeft, numberPage, setPage }: IArrowProps) => {

    const handleClick = () => {
        setPage(numberPage)
    }

    return (
        <img
            className={`${isLeft ? styles.arrowLeft : styles.arrowRight}`}
            src="/arrow-down.png"
            alt="flecha"
            onClick={handleClick} />
    )
}