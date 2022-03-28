import './MainStyle.scss';

import Table from '../Table/Table';

const Main = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="title text-center p-2 mt-5 text-light bg-info">
                    <h2 className="fs-1">Últimos empleos publicados</h2>
                </div>

                <Table></Table>
                <Table></Table>

            </div>
        </div>
    )
}

export default Main;
