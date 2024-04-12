import CompanyCard from "./CompanyCard";
import { useState } from "react";
import Pagination from "./Pagination";


/** Presentational component for displaying jobs list
 *
 * State: None
 * Props: companies like [{handle, name, description, logo}, ...]
 *
 * CompaniesPage -> CompaniesList -> CompanyCard
*/
function CompaniesList({ companies }) {
    const [currPage, setCurrPage] = useState(1);
    const [numItemsPerPage, setNumItemsPerPage] = useState(5);

    function renderCompanies() {
        const startIndex = (currPage - 1) * numItemsPerPage;
        const companiesToDisplay = companies.slice(startIndex, startIndex + numItemsPerPage);
        return (
            companiesToDisplay.map(company =>
                <CompanyCard
                    key={company.handle}
                    company={company}
                />)
        );
    }


    function handlePageChange(newPageNum) {
        setCurrPage(newPageNum);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            {renderCompanies()}
            <Pagination
                currPage={currPage}
                numItems={companies.length}
                handlePageChange={handlePageChange}
                numItemsPerPage={numItemsPerPage} />
        </div>
    );
}

export default CompaniesList;