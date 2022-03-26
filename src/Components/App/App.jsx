import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Logo from '../../Imgs/LogoCJ.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../Login/LoginPage';



function App() {
  return (

    <div className="App">
      <header className="App-header">
        <ul>
          <li> <img className="Logo" src={Logo} /> </li>
          <li><a href="#news">Ofertas de empleo</a></li>
          <li className="publish"><a href="/">Publicar un empleo</a></li>
          <input type="text" placeholder="Buscar empleos" name="search" />
          <input type="button" placeholder='Buscar' name="buttonSearch" />
          <li className="rightLogin"><a href="#login">Iniciar sesi&oacute;n</a></li>
          <li className="rightRegister"><a href="#Register">Registrarse</a></li>




        </ul>
        <br />
        <br />
        <br />
        <h1 className="Banner">Últimos empleos publicados</h1>



      </header>
    </div>

  );

}

export default App;
