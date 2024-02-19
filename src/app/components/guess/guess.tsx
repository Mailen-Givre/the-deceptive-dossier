

import { useState } from 'react'
import styles from './index.module.scss'
import { Culprit } from './culprit'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import Select from 'react-select';
import { culprit, day, time } from '@/app/answers';
import { useCongratsContext } from '@/app/congratsContext';


interface IGuesses {
    culprit: boolean;
    day: boolean;
    time: boolean;
}


export const Guess = (): JSX.Element => {

    const { setIsCongrats } = useCongratsContext()
    const [culprits, setCulprits] = useState<string[]>([])
    const [selectedDay, setSelectedDay] = useState<{ value: string, label: string }>()
    const [hasGuessed, setHasGuessed] = useState<boolean>(false)
    const [guesses, setGuesses] = useState<IGuesses>({ culprit: false, day: false, time: false })
    const [timeValue, setTimeValue] = useState('00:00');

    const days = [
        { value: 'monday', label: 'Lunes' },
        { value: 'tuesday', label: 'Martes' },
        { value: 'wednesday', label: 'Miércoles' },
        { value: 'thurday', label: 'Jueves' },
        { value: 'friday', label: 'Viernes' },
        { value: 'saturday', label: 'Sábado' },
        { value: 'sunday', label: 'Domingo' },
    ];
    const culpritsNames = [
        {
            culprit: 'cook',
            name: 'El cocinero'
        },
        {
            culprit: 'doctor',
            name: 'La médica'
        },
        {
            culprit: 'gardener',
            name: 'El jardinero'
        },
        {
            culprit: 'coiffeur',
            name: 'La peluquera'
        }
    ]

    const handleTimeValue = (time: string | null) => {
        time && setTimeValue(time)
    }

    const handleAnswer = () => {
        setHasGuessed(true)
        const culpritGuess = JSON.stringify(culprits) === JSON.stringify(culprit)
        const dayGuess = selectedDay?.value === day
        const timeGuess = timeValue === time
        setGuesses({ ...guesses, culprit: culpritGuess, day: dayGuess, time: timeGuess })

        if (culpritGuess && dayGuess && timeGuess) setIsCongrats(true)

        setTimeout(() => {
            const guessesSection = document.getElementById('guesses');
            if (guessesSection) {
                guessesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);

    }

    const handleDay = (day: any) => {
        setSelectedDay(day)
    }

    const handleCulprit = (culprit: string) => {
        if (!culprits.includes(culprit)) {
            setCulprits([...culprits, culprit])
        } else {
            const updatedCulprits = culprits.filter(existingCulprit => existingCulprit !== culprit);
            setCulprits(updatedCulprits);
        }
    }

    return (

        <div className={styles.answer}>
            <h2>Miss A.Lee fue asesinada </h2>
            <img src="/characters/deadWoman/the-dead-gray.png" alt="" />
            <h3>El culpable o los culpables son: </h3>
            <div className={styles.murder}>
                {culpritsNames.map((culprit, index) => (
                    <Culprit
                        key={index}
                        culprit={culprit.culprit}
                        name={culprit.name}
                        handleCulprit={handleCulprit}
                        isSelected={culprits.includes(culprit.culprit)}
                    ></Culprit>
                ))}
            </div>
            <h3>El hecho ocurrió:</h3>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Select
                    value={selectedDay}
                    onChange={(e) => handleDay(e)}
                    options={days}
                    className={styles.datePicker}
                    placeholder={'Seleccionar día'}
                />
                <TimePicker
                    onChange={(e) => handleTimeValue(e)}
                    value={timeValue}
                    format={"HH:mm"}
                    clearIcon={null}
                    className={styles.timePicker} />
            </div>
            <button className={styles.guessButton} onClick={handleAnswer}>Adivinar</button>

            {hasGuessed &&
                <div id='guesses' style={{ display: 'flex', gap: '2rem' }}>
                    {guesses.culprit ? <p className={styles.correct}>O culpable</p> : <p className={styles.incorrect}>X culpable</p>}
                    {guesses.day ? <p className={styles.correct}>O día</p> : <p className={styles.incorrect}>X día</p>}
                    {guesses.time ? <p className={styles.correct}>O hora</p> : <p className={styles.incorrect}>X hora</p>}
                </div>
            }
        </div>
    )
}