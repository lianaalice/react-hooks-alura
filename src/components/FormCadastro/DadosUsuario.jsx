import useErros from "../../hooks/useErros";
import { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
const { TextField, Button } = require("@material-ui/core");

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      if(possoEnviar()){
          aoEnviar({email, senha});
       }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        id="email"
        label="E-mail"
        name="email"
        type="email"
        required
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.mensagem}
        id="senha"
        label="Senha"
        name="senha"
        type="password"
        required
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
