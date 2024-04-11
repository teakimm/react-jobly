import { Link } from "react-router-dom";

/** Presentational component for displaying company
 *
 * State: None
 * Props: company like {handle, name, description, jobs, logo}
 *
 * CompanyList -> CompanyCard
*/
function CompanyCard({ company }) {

    return (
        <Link className="text-decoration-none" to={`/companies/${company.handle}`}>
            <div className="CompanyCard card mt-4 p-4">
                <div>
                    <h2>{company.name}</h2>
                    <h5>{company.description}</h5>
                    <p>Employees: {company.numEmployees}</p>
                </div>
                <div>
                    {company.logoUrl && <img style={{ width: "6rem" }} src={company.logoUrl} alt={`Logo for ${company.name}`} />}
                </div>
            </div>
        </Link >);
}

export default CompanyCard;