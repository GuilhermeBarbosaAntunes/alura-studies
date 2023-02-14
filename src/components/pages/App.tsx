import Formulario from "components/Formulario";
import Lista from "components/Lista";
import styles from'./App.module.scss';
import Cronometro from "components/Cronometro";




export default function App() {
  return (
    <div className={styles.AppStyles}>
     <Formulario />
     <Lista />
     <Cronometro />
    </div>
  );
}

