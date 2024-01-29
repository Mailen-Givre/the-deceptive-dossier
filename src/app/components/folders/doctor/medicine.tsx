import styles from './index.module.scss'

export default function Medicine() {

    return (
        <>
            <img src="/characters/doctor/medicine.png" alt="" />
            <div className={styles.medicine}>
                <p>Debo chequear si los medicamentos son los que corresponden o hubo sobredosis. Esta es la receta:</p>
                <ul>
                    <li><b>Medalazina:</b> los días de 2 sílabas.</li>
                    <li><b>Atervastat¡ni:</b> desde el lunes, inclusive, cada 2 días.</li>
                    <li><b>Onalapril:</b> los días siguientes a aquellos días que llevan una &quot;N&quot; en el nombre.</li>
                    <li><b>Lanoprost:</b> los días anteriores a aquellos que tienen alguna letra repetida.</li>
                </ul>
            </div>
        </>
    );
}