import { Div, Titulo, SendButton } from "./styled";

function TelaUsuarioCadastrado (props){
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <SendButton onClick={() => props.mudarTela(1)}>Voltar ao Inicio</SendButton>
        </Div>
    )
}

export default TelaUsuarioCadastrado;