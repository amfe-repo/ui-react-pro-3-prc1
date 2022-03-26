import '../Login/LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function IniciarSesion() {
  return (
    <div className="LoginPage">
      <header className="Cabeza">
        <br/>
        <br/>
        <br/>
        <h1>Iniciar sesi&oacute;n </h1>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
   <button type="submit" className="btn btn-primary">Iniciar sesión</button>
   <br/>
</form>






      </header>  
    </div>

  );
  
}

export default IniciarSesion;
