
import ITarefa from 'Types/tarefas';
import Item from './Item';
import styles from './Lista.module.scss';


function Lista({ tarefas }: { tarefas: ITarefa[] }) {

    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul className={styles.item}>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;