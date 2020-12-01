
function validarCpf(cpf){
    if(cpf.length !== 11) {
     return {cpf: {valido: false, mensagem: "O CPF precisa ter 11 dígitos"}}
    } else {
      return {cpf: {valido: true, mensagem: ""}}
    }
  }

  function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72 ) {
     return {senha: {valido: false, mensagem: "A senha precisa ter entre 4 e 72 dígitos"}}
    } else {
      return {senha: {valido: true, mensagem: ""}}
    }
  }


  export {validarCpf, validarSenha}