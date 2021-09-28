import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from './components/ListaDeCategorias'
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor() {
    super();
    
    this.state = {
      notas: []
    };
  }

  criarNota(titulo,texto){

    const novaNota = {titulo,texto};
    const novoArrayNotas = [ ...this.state.notas,novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    let novoArray = this.state.notas
    novoArray.splice(index,1)
    this.setState({notas: novoArray});
    
  }
  
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
             
        <ListaDeCategorias/>
        <ListaDeNotas  
        apagarNotas={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
        </main>
        
      </section>
    );
  }
}

export default App;
