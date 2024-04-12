import { Navigate } from "react-router-dom";
import "./Pagination.css";

/** Component for displaying pagination buttons
 *
 * State: None
 * Props:
 *      currPage
 *      numItems
 *      handlePageChange
 *      numItemsPerPage
 *
 * CompaniesList, JobsList -> Pagination
 */
function Pagination({ currPage, numItems, handlePageChange, numItemsPerPage = 20 }) {

    const firstPageNum = 1;
    const lastPageNum = Math.ceil(numItems / numItemsPerPage);

    const leftHiddenClass = currPage === firstPageNum ? "hidden" : "";
    const rightHiddenClass = currPage === lastPageNum ? "hidden" : "";

    if (firstPageNum === lastPageNum) {
        return "";
    }

    if (currPage < 1) return <Navigate to="/404" />;
    if (currPage > lastPageNum) return <Navigate to="/404" />;

    return <div className="d-flex m-3" style={{ gap: "1rem" }}>

        <div
            className={`Pagination-item ${leftHiddenClass}`}
            onClick={() => handlePageChange(firstPageNum)}>
            <i className="bi bi-chevron-double-left"></i>
        </div>
        <div
            className={`Pagination-item ${leftHiddenClass}`}
            onClick={() => handlePageChange(currPage - 1)}>
            <i className="bi bi-chevron-left"></i>
        </div>

        <div
            className="Pagination-item">
            {currPage}
        </div>

        <div
            className={`Pagination-item ${rightHiddenClass}`}
            onClick={() => handlePageChange(currPage + 1)}>
            <i className="bi bi-chevron-right"></i>
        </div>
        <div
            className={`Pagination-item ${rightHiddenClass}`}
            onClick={() => handlePageChange(lastPageNum)}>
            <i className="bi bi-chevron-double-right"></i>
        </div>

    </div>;
}

export default Pagination;

