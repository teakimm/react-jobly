import CompanyCard from "./CompanyCard";
import Pagination from "./Pagination";

const NUM_ITEMS_PER_PAGE = 8;

/** Presentational component for displaying jobs list
 *
 * State: currPage
 * Props: companies like [{handle, name, description, logo}, ...]
 *
 * CompaniesPage -> CompaniesList -> CompanyCard. Pagination
*/
function CompaniesList({ companies, currPage, handlePageChange }) {


    function renderCompanies() {
        const startIndex = (currPage - 1) * NUM_ITEMS_PER_PAGE;
        const companiesToDisplay = companies.slice(startIndex, startIndex + NUM_ITEMS_PER_PAGE);
        return (
            companiesToDisplay.map(company =>
                <CompanyCard
                    key={company.handle}
                    company={company}
                />)
        );
    }

    return (
        <div className="d-flex flex-column align-items-center">
            {renderCompanies()}
            <Pagination
                currPage={currPage}
                numItems={companies.length}
                handlePageChange={handlePageChange}
                numItemsPerPage={NUM_ITEMS_PER_PAGE} />
        </div>
    );
}

export default CompaniesList;