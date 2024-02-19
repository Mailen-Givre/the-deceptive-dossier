import { useState } from 'react';
import styles from './index.module.scss'
import Dead from './dead/dead';
import Cook from './cook/cook';
import Doctor from './doctor/doctor';
import Gardener from './gardener/gardener';
import Coiffeur from './coiffeur/coiffeur';
import React from 'react';
import Cover from './cover/cover';

export default function Folders(): JSX.Element {
    const tabs = ['', 'Miss A.Lee', 'El cocinero', 'La médica', 'El jardinero', 'La peluquera']
    const tabComponents = [Cover, Dead, Cook, Doctor, Gardener, Coiffeur]

    const [selectedTab, setSelectedTab] = useState<number>(0)

    return (
        <div className={styles.foldersBackground}>
            <div className={styles.folderTabContainer}>
                <div className={styles.tabContainer}>
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`${styles.tab} ${selectedTab !== index ? styles.tabNotSelected : ''}`}
                            onClick={() => setSelectedTab(index)}
                        >{tab}</div>
                    ))}
                </div>
                <div className={styles.folderContainer}>
                    {tabComponents[selectedTab] && React.createElement(tabComponents[selectedTab])}
                </div>
            </div>
        </div>
    );
}
