import WheelPicker from 'react-simple-wheel-picker';
import styles from './index.module.scss'

const data = [
    {
        id: '1',
        value: 'C'
    },
    {
        id: '2',
        value: 'D'
    },
    {
        id: '3',
        value: 'E'
    },
    {
        id: '4',
        value: 'F'
    },
    {
        id: '5',
        value: 'G'
    },
    {
        id: '6',
        value: 'A'
    },
    {
        id: '7',
        value: 'B'
    }
];

interface ILetterPickerProps {
    setLetters: React.Dispatch<React.SetStateAction<string[]>>;
    index: number,
    value: string,
}

export const LetterPicker = ({ setLetters, index }: ILetterPickerProps): JSX.Element => {
    const handleOnChange = (target: { id: any; value: any; }): void => {
        const { value } = target;
        setLetters((prevLetters: string[]): string[] => {
            const newLetters = [...prevLetters];
            newLetters[index] = value;
            return newLetters;
        });

    };

    return (
        <div className={styles.picker}>
            <WheelPicker
                data={data}
                onChange={handleOnChange}
                height={90}
                width={30}
                titleText="Enter value same as aria-label"
                itemHeight={30}
                selectedID={data[0].id}
                color="#ccc"
                activeColor="#333"
                backgroundColor="#fff"
            />
        </div>
    );
};