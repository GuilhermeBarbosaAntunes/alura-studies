import  Botao from "components/Botao";
import Relogio from "./Relogio";
import styles from './Cronometro.module.scss';


export default function Cronometro() {
    return (
        <div className={styles.cronometro}>
                <p className={styles.titulo}>Escolha um card e inicike o cronômetro</p>
            <div className={styles.relogioWrapper}>
               <Relogio />
            </div>
            <div>
                <Botao>
                    Começar!
                </Botao>
            </div>
        </div>
    )
}