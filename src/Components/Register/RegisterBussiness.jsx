import Navbar from '../Navbar/Navbar.jsx';
import "./RegisterBussiness.css";
import { Link } from 'react-router-dom';


function Bussiness() {
    return (
        <div className="RegisterJobPage">
            <Navbar />
            <br />
            <h1>Registrarse como empresa</h1>
            <br />

            <form className="ApartadoRegistrarEmpresa">
                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" />
                <Link class="btn btn-outline-success" for="success-outlined" to="/register">Aplicante</Link>

                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" checked />
                <Link className="btn btn-outline-danger" for="danger-outlined" to="/bussiness">Empresa</Link>
                <br />
                <br />

                <div class="mb-3">
                    <label htmlFor="NameField" className="form-label">Nombre de la empresa</label>
                    <input type="text" className="form-control" id="textName" />

                    <label htmlFor="DescriptionField" className="form-label">Descripción</label>
                    <textarea type="text" className="form-control" id="textDescription" />

                    <label for="EmailField" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="textEmail" aria-describedby="emailHelp" />

                    <label for="PasswordField" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="textPasswd" />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
            <br />






        </div>

    )
}

export default Bussiness;