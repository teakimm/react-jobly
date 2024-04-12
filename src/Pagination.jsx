import "./Pagination.css";

function Pagination({ currPage, numItems, handlePageChange, numItemsPerPage = 20 }) {
    const firstPageNum = 1;
    const lastPageNum = Math.ceil(numItems / numItemsPerPage);

    const leftHiddenClass = currPage === firstPageNum ? "hidden" : "";
    const rightHiddenClass = currPage === lastPageNum ? "hidden" : "";

    console.log(lastPageNum);

    if (firstPageNum === lastPageNum) {
        return "";
    }

    return <div className="d-flex m-3" style={{ gap: "1rem" }}>

        <div className={`Pagination-item ${leftHiddenClass}`} onClick={() => handlePageChange(firstPageNum)}><i className="bi bi-chevron-double-left"></i></div>
        <div className={`Pagination-item ${leftHiddenClass}`} onClick={() => handlePageChange(currPage - 1)}><i className="bi bi-chevron-left"></i></div>

        <div className="Pagination-item"> {currPage} </div>

        <div className={`Pagination-item ${rightHiddenClass}`} onClick={() => handlePageChange(currPage + 1)}><i className="bi bi-chevron-right"></i></div>
        <div className={`Pagination-item ${rightHiddenClass}`} onClick={() => handlePageChange(lastPageNum)}><i className="bi bi-chevron-double-right"></i></div>

    </div>;
}

export default Pagination;

