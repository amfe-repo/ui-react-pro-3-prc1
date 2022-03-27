const PaginationContainer = (props) => {
    return (
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><a class="page-link text-secondary" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link text-secondary" href="#">1</a></li>
                <li class="page-item"><a class="page-link text-secondary" href="#">2</a></li>
                <li class="page-item"><a class="page-link text-secondary" href="#">3</a></li>
                <li class="page-item"><a class="page-link text-secondary" href="#">Next</a></li>
              </ul>
            </nav>    
    )
}

export default PaginationContainer;
