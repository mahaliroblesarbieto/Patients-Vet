import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <Header 
        titulo="Pacientes Administrador Veterinaria"/>
        <NuevaCita/>
      </div>
    );
  }
}

export default App;
