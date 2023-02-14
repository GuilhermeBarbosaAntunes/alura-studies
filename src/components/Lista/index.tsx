import Item from './Item';
import styles from './Lista.module.scss';

function Lista() {

    const tarefas = [{
        id: 1,
        tarefa: 'React',
        tempo: '02:00:00'

    }, {
        id: 2,
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        id: 3,
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }]

    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                    key={item.id}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;