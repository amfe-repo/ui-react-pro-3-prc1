import './Navbar.css';
import '../Navbar/NavbarStyle.scss';
import Logo from '../../Imgs/LogoCJ.png';

const Navbar = (props) =>
{
    return (
        <header className="navbar-head">
            <div className="row p-md-3">
                <span className="left col-sm-12 col-lg-8 d-flex row">
                    <span className="p-md-2 btn btn-secondary text-info me-3 fs-md-6 col-lg-2 ms-3 ms-lg-2" >Ofertas de empleo</span>
                    <span className="p-md-2 btn btn-info fw-bold text-light me-3 fs-md-6 col-lg-2 ms-3 ms-sm-0" >Publicar empleo</span>
                    <div className="search row col-lg-6 p-0">
                        <input type="text" className="ms-0 ms-lg-2 col-10 col-lg-8" />
                        <button className="btn btn-outline-light fw-bold col-sm-2 col-2 col-lg-2">search</button>
                    </div>
                </span>
                <span className="right mb-2 mb-sm-0 mt-3 mt-md-3 mt-lg-0 col-lg-4 d-flex flex-row-reverse">
                    <button className="p-2 btn btn-info fw-bold text-light me-3">Iniciar sesion</button>
                    <button className="p-2 btn btn-secondary fw-bold text-light me-3">Registrase</button>
                </span>
            </div>
        </header>
    )
}

export default Navbar;
