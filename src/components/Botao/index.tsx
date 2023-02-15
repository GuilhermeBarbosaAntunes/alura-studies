import React, { ReactNode } from 'react';
import styles from './Botao.module.scss';


/*type BotaoProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: "Button" | "submit" | string;
};
const Botao: React.FC<BotaoProps> = ({ text, ...rest }) => {
    return (
        <button {...rest} className={styles.botao}>
            {text}
        </button>
    );
};*/






class Botao extends React.Component
    <{
        type?: "button" | "submit" | "reset" | undefined
        children: ReactNode
    }>{
    render() {
        const { type = "button" } = this.props
        return (
            <button type={type} className={styles.botao}>
                {this.props.children}
            </button>
        )
    }
}



export default Botao;


