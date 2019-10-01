import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };
  crearNuevaCita = (datos) => {
    console.log(datos);
    const citas = [...this.state.citas, datos]
    this.setState({citas: citas})
  }
  render() {
    return (
      <div className="container">
        <Header titulo="Pacientes Administrador Veterinaria" />
        <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
        <div className="mt-5 col-md-10 mx-auto">
          <ListaCitas
          citas={this.state.citas}
          />
        </div>
      </div>
    );
  }
}

export default App;
