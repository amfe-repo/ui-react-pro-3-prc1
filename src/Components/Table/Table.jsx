import Pagination from '../Pagination/PaginationContainer';

import './Table.css';

const Table = (props) => {
    return (
        <div className="container-fluid">
            <div className="row table-row ">
                <div class="p-3 mb-2 bg-secondary fs-4 text-white text-center">Nombre categoria</div>
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
                            <td>Mark</td>
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
                <div className="row-pagination">
                    <Pagination></Pagination>
                </div>
            </div>
        </div>
    )
}

export default Table;
