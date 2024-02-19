import { caeNumber } from "@/app/answers";
import styles from './index.module.scss'

interface ISupermarketProps {
    isTicket: boolean,
    setIsTicket: (isTicket: boolean) => void,
    caeInput: string,
    setCaeInput: (caeInput: string) => void
}

export const Supermarket = ({ isTicket, setIsTicket, caeInput, setCaeInput }: ISupermarketProps): JSX.Element => {

    const checkCaeNumber = (cae: string) => {
        setIsTicket(cae === caeNumber);
    }

    const handleCaeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cae = e.target.value;
        !isTicket && setCaeInput(cae);
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            checkCaeNumber(caeInput);
        }
    }

    return (
        <div className={styles.supermarket}>
            <input
                type="text"
                value={caeInput}
                onChange={handleCaeInput}
                onKeyUp={handleEnter}
            />
            {isTicket &&
                <img src="/characters/cook/ticket2.jpg" alt="" />
            }
        </div>
    );
};
