import '../Navbar/NavbarStyle.scss';
import './Navbar.css';
import Logo from '../../Imgs/LogoCJ.png';
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <header className="navbar-head">
            <div className="row p-md-3">

                <span className="left col-sm-12 col-lg-8 d-flex row">
                    <Link className="p-md-2 btn btn-secondary text-white me-3 fs-md-6 col-lg-2 ms-3 ms-lg-2 fw-bold" to="/">Ofertas de empleo</Link>
                    <Link className="p-md-2 btn btn-info fw-bold text-light me-3 fs-md-6 col-lg-2 ms-3 ms-sm-0" to="/post-job" >Publicar empleo</Link>
                    <div className="search row col-lg-6 p-0">
                        <input type="text" className="ms-0 ms-lg-2 col-10 col-lg-8" />
                        <button className="btn btn-outline-light fw-bold col-sm-2 col-2 col-lg-2">Buscar</button>
                    </div>
                </span>

                <span className="right mb-2 mb-sm-0 mt-3 mt-md-3 mt-lg-0 col-lg-4 d-flex flex-row-reverse">
                    <Link className="p-2 btn btn-info fw-bold text-light me-3" to="/login">Iniciar sesión</Link>
                    <Link className="p-2 btn btn-secondary fw-bold text-light me-3" to="/register">Registrarse</Link>

                </span>

            </div>
        </header>
    )
}

export default Navbar;
