import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  
console.log(erros)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        name="nome"
        required
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        name="sobrenome"
        required
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.mensagem}
        id="cpf"
        label="CPF"
        name="cpf"
        required
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
            checked={promocoes}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
            checked={novidades}
          />
        }
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
