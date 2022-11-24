import { useState } from 'react';

import PhoneInput from 'react-phone-number-input/input'
import { Form, FormContainer, Input, StyledLabel, SendButton, StyledH1, TextArea } from "./styled";

function TelaCadastro(props) {
    const [value, setValue] = useState()

    return (
        <FormContainer>
            <StyledH1>Cadastro de Endereço</StyledH1>
            <Form>
                <StyledLabel htmlFor="endereco">
                    Endereço:
                    <Input id="endereco" type={"text"} />
                </StyledLabel>
                <StyledLabel htmlFor="numero-da-residencia">
                    Número da Residência:
                    <Input id="numero-da-residencia" type={"number"} />
                </StyledLabel>
                <StyledLabel htmlFor="telefone">
                    Telefone:
                    <PhoneInput
                        country={"BR"}
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue} />
                </StyledLabel>
                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <TextArea id="complemento" type={"text-area"} rows={3} cols={50} />
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
            </Form>
        </FormContainer>
    );
}

export default TelaCadastro;
