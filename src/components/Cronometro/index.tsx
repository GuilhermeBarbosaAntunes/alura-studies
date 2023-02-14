import  Botao from "components/Botao";
import Relogio from "./Relogio";

export default function Cronometro() {
    return (
        <>
            <div>
                <p>Escolha um card e inicike o cronômetro</p>
            </div>
               <Relogio />
            <div>
                <Botao>
                    Começar!
                </Botao>
            </div>
        </>
    )
}