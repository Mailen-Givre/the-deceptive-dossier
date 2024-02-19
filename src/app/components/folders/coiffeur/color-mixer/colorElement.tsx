import styles from './index.module.scss'

interface IColorElementProps {
    index: number,
    isSelected: (color: number) => boolean,
    handleColors: (color: number) => void
}

const ColorElement = ({ index, isSelected, handleColors }: IColorElementProps): JSX.Element => {
    return (
        <div
            className={`${styles[`color${index}`]} ${isSelected(index) ? styles.selectedColor : ''}`}
            onClick={() => handleColors(index)}
        ></div>
    )
};

export default ColorElement;