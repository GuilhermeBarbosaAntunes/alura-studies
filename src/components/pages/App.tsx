import Formulario from "components/Formulario";
import Lista from "components/Lista";
import styles from './App.module.scss';
import Cronometro from "components/Cronometro";
import { useState } from "react";
import ITarefa from "Types/tarefas";




export default function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={styles.AppStyles}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

