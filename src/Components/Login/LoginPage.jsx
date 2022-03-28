import Navbar from '../Navbar/Navbar';

import '../Login/LoginPage.css';

import { Outlet, Link } from 'react-router-dom';

function IniciarSesion() {
  return (
    <div className="LoginPage">
      <Navbar />
      <header className="Cabeza">
        <br />
        <br />
        <br />
        <h1>Iniciar sesi&oacute;n </h1>
        <form>
          <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" checked />
          <label className="btn btn-outline-success" htmlFor="success-outlined">Aplicante</label>

          <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
          <label className="btn btn-outline-danger" htmlFor="danger-outlined">Empresa</label>
          <br />
          <br/>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          <br />
        </form>
        <Link to="/">Ir a casa</Link>
      </header>
    </div>

  );

}

export default IniciarSesion;
