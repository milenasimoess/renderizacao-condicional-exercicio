import React from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";


function TelaCadastroEndereco (props){
return (
    <FormContainer>
        <h1>Casdastro Endereço</h1>
       <Form>
           <StyledLabel htmlFor="endereco">
            Endereço:
            <Input id="endereco"/>           
           </StyledLabel>
           <StyledLabel htmlFor="numero">
            Número:
            <Input id="numero"/>
           </StyledLabel>
           <StyledLabel htmlFor="telefone">
            Telefone:
            <Input id="telefone"/>
           </StyledLabel>
           <StyledLabel htmlFor="complemento">
            Complemento:
            <Input id="complemento"/>
           </StyledLabel>
           <SendButton onClick={() => props.mudarTela(4)}>Cadastrar Endereço</SendButton>

       </Form>


    </FormContainer>
)
}
export default TelaCadastroEndereco;