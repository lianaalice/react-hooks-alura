import React from "react"

const ValidacoesCadastro = React.createContext({
    validarCpf: semValidacao, 
    validarSenha: semValidacao
});

function semValidacao (dados) {
    return {valido: true, mensagem: ""}
}

// corpo do contexto é o contexto padrão, caso você não utilize o provider ele realiza o contexto padrão

export default ValidacoesCadastro;