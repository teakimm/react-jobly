import CompanyCard from "./CompanyCard";

/** Presentational component for displaying jobs list
 *
 * State: None
 * Props: companies like [{handle, name, description, logo}, ...]
 *
 * JobsPage, CompanyDetails -> JobsList -> JobCard //TODO: update this
*/
function CompaniesList({ companies }) {

    function renderCompanies() {
        return (
            companies.map(company =>
                <CompanyCard
                    key={company.handle}
                    company={company}
                />)
        );
    }

    return (
        <div>
            {renderCompanies()}
        </div>
    );
}

export default CompaniesList;