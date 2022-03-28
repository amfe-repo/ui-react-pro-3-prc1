const PaginationContainer = (props) => {
    return (
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link text-secondary" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link text-secondary" href="#">1</a></li>
                <li className="page-item"><a className="page-link text-secondary" href="#">2</a></li>
                <li className="page-item"><a className="page-link text-secondary" href="#">3</a></li>
                <li className="page-item"><a className="page-link text-secondary" href="#">Next</a></li>
              </ul>
            </nav>
    )
}

export default PaginationContainer;
