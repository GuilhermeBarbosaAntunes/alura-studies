import React, { ReactNode } from 'react';
import styles from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined
        children?: ReactNode
        onClick?: () => void
}

function Botao({ onClick, type, children}: Props) {
    return (
        <button 
        onClick={onClick} 
        type={type} 
        className={styles.botao}>
            {children}
        </button>
    )
}

export default Botao;


