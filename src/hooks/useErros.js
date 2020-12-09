import { useState } from "react";

function useErros(validacoes) {
  const estadoIncial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoIncial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let input in erros) {
      if (!erros[input].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoIncial = {};
  for (let input in validacoes) {
    estadoIncial[input] = { valido: true, mensagem: "" };
  }
  return estadoIncial;
}

export default useErros;
