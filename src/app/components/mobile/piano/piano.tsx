import * as Tone from 'tone';
import styles from './index.module.scss'

export const Piano = () => {
    const handleKeyClick = (note: string) => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(`${note}4`, '8n');
    };

    return (
        <div className={styles.piano}>
            <div className={styles.notes}>
                {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((note) => (
                    <div
                        key={note}
                        style={{

                            padding: '10px',
                            margin: '5px',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleKeyClick(note)}
                    >
                        {note}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Piano;
