

import { useState } from 'react';
import styles from './index.module.scss'
import ColorElement from './colorElement';
import { mixedColors } from './mixedColors';

interface IMixedColor {
    colors: number[],
    name: string,
    codeName: string,
    color: string
}

export default function ColorMixer(): JSX.Element {
    const [selectedColors, setSelectedColors] = useState<number[]>([0, 0])
    const [firstSelected, setFirstSelected] = useState<boolean>(true)
    const [mixedColor, setMixedColor] = useState<IMixedColor | null>(null)

    const handleColors = (color: number) => {
        const newSelectedColors = [...selectedColors];

        if (firstSelected && selectedColors[0] !== 0 && selectedColors[1] !== 0) {
            newSelectedColors[0] = color;
            newSelectedColors[1] = 0;
        } else {
            newSelectedColors[firstSelected ? 0 : 1] = color;
        }
        setSelectedColors(newSelectedColors);
        setFirstSelected(!firstSelected);
        handleMixedColor(newSelectedColors);
    };


    const handleMixedColor = (newSelectedColors: number[]) => {
        const selectedObject = mixedColors.find(obj =>
            obj.colors.every(color => newSelectedColors.includes(color))
        );
        if (selectedObject) setMixedColor(selectedObject)
    }

    const isSelected = (color: number) => {
        const foundColor = selectedColors.find(e => e === color)
        return foundColor != undefined
    }

    const numColors = 6;

    const colorElements = Array.from({ length: numColors }, (_, index) => (
        <ColorElement
            key={index + 1}
            index={index + 1}
            isSelected={isSelected}
            handleColors={handleColors}
        />
    ));

    return (
        <div className={styles.colorMixer}>
            <div className={styles.colors}>
                {colorElements}
            </div>
            <div className={styles.mixedColorContainer}>
                <div className={styles.mixedColor} style={{ backgroundColor: mixedColor?.color || '#ffffff' }}></div>
                {/* <p>{mixedColor?.name || ''}</p> */}
                <p>{mixedColor?.codeName || ''}</p>
            </div>
        </div>
    );
}
