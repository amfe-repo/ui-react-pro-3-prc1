import Logo from '../../Imgs/LogoCJ.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li> <img class="Logo" src={Logo} /> </li>
          <li><a href="#news">Ofertas de empleo</a></li>
          <li class="publish"><a href="#Publicar">Publicar un empleo</a></li>
            <input type="text" placeholder="Buscar empleos" name="search"/>
            <input type="button" placeholder='Buscar' name="buttonSearch"/>
          <li class="rightLogin"><a href="#login">Iniciar sesi&oacute;n</a></li>
          <li class="rightRegister"><a href="#Register">Registrarse</a></li>
        </ul>
        <br></br>
        <br></br>
        <br></br>
        <h1 class="Banner">Últimos empleos publicados</h1>
      </header>
    </div>
  );
}

export default App;
