
function Pagination({ currPage, numItems, handlePageChange, numItemsPerPage = 20 }) {

    const firstPageNum = 1;
    const lastPageNum = Math.floor(numItems / numItemsPerPage);

    return <div>
        {currPage === firstPageNum || <>
            <button onClick={() => handlePageChange(firstPageNum)}><i className="bi bi-chevron-double-left"></i></button>
            <button onClick={() => handlePageChange(currPage - 1)}><i className="bi bi-chevron-left"></i></button>
        </>}
        {currPage}
        {currPage === lastPageNum || <>
            <button onClick={() => handlePageChange(currPage + 1)}><i className="bi bi-chevron-right"></i></button>
            <button onClick={() => handlePageChange(lastPageNum)}><i className="bi bi-chevron-double-right"></i></button>
        </>}
    </div>;
}

export default Pagination;

