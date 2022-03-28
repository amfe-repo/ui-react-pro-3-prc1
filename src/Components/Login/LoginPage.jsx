import Navbar from '../Navbar/Navbar';
import '../Login/LoginPage.css';
function IniciarSesion() {
  return (
    <div className="LoginPage">
      <Navbar />
      <br />
      <h1>Iniciar sesi&oacute;n </h1>
      <br />

      <form className="ApartadoLogin">
        <div class="mb-3">
          <label for="EmailField" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="textEmail" aria-describedby="emailHelp" />

          <label for="PasswordField" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="textPasswd" />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      </form>
      <br />

    </div>

  );

}

export default IniciarSesion;
