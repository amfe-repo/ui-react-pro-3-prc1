<<<<<<< HEAD
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

=======
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="container-fluid p-0">
        <Navbar></Navbar>
        <Main></Main>
    </div>
  );
>>>>>>> c26801af9169f0383a41b073af792b89b690f1ff
}

export default App;
