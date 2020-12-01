import "./App.css";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { Component } from "react";
import { validarCpf, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCpf, senha: validarSenha }}
        >
          <FormCadastro aoEnviar={funcaoSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function funcaoSubmit(dados) {
  console.log(dados);
}

export default App;
