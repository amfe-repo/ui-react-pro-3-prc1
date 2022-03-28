import Table from '../Table/Table';
import Pagination from '../Pagination/PaginationContainer';
import Navbar from '../Navbar/Navbar';

import './CategorieView.css';

const CategorieView = (props) => {
    return (
        <div className="container-fluid p-0">
                <Navbar />
                <Table viewAllBtn={false}></Table>
                <div className="row-pagination">
                    <Pagination></Pagination>
                </div>
        </div>
    )
}

export default CategorieView;
