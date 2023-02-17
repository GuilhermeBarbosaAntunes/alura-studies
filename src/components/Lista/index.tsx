
import ITarefa from 'Types/tarefas';
import Item from './Item';
import styles from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul className={styles.item}>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;