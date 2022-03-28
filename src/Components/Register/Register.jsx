import Navbar from '../Navbar/Navbar.jsx';
import "./Register.css";
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="RegisterPage">
            <Navbar />
            <br />
            <h1>Registrarse</h1>
            <br />

            <form className="ApartadoRegistrar">
                <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" checked />
                <Link className="btn btn-outline-success" htmlFor="success-outlined" to="/register">Aplicante</Link>

                <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
                <Link className="btn btn-outline-danger" htmlFor="danger-outlined" to="/bussiness">Empresa</Link>
                <br />
                <br/>

                <div className="mb-3">
                    <label htmlFor="NameField" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="textName" />

                    <label htmlFor="LastNameField" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="textLName" />

                    <label htmlFor="DateField" className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="textDate" />


                    <label htmlFor="EmailField" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="textEmail" aria-describedby="emailHelp" />

                    <label htmlFor="CityField" className="form-label">Ciudad natal</label>
                    <input type="text" className="form-control" id="textCity"></input>

                    <label htmlFor="PasswordField" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="textPasswd" />

                    <label htmlFor="ProfessionField" className="form-label">Profesión</label>
                    <input type="text" className="form-control" id="textProfession"></input>
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
            <br />




        </div >

    )
}

export default Register;
