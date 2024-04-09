import { render } from "react-dom";
import CompanyCard from "./CompanyCard";

/** Presentational component for displaying jobs list
 *
 * State: None
 * Props: companies like [{code, name, description, jobs, logo}, ...]
 *
 * JobsPage, CompanyDetails -> JobsList -> JobCard
*/
function CompanyList({ companies }) {

    function renderCompanies() {
        return companies.map(company => <CompanyCard key={jcompany.id} company={company} />);
    }

    return (
        <div>
            {renderCompanies()}
        </div>
    );
}

export default CompanyList;