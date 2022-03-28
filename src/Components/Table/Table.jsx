import Pagination from '../Pagination/PaginationContainer';
import { Outlet, Link } from "react-router-dom";

import './Table.css';

const Table = (props) => {

    const renderButton = props.viewAllBtn == undefined ? true : false;

    return (
        <div className="container-fluid">
            <div className="row table-row ">
                <div className="p-3 mb-2 bg-secondary fs-4 text-white text-center">Nombre categoria</div>
                <table className="table">
                    <thead>
                        <tr className="table-info fs-5">
                            <th scope="col">Puesto</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Ciudad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-secondary">
                            <td><Link to="/job">Mark</Link></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr className="table-secondary">
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
                { renderButton &&

                    <Link className="btn btn-info text-light w-3 btn-lg view-all" to="/jobs-categories">Mostrar todos los empleos</Link>
                }

            </div>

        </div>
    )
}

export default Table;
