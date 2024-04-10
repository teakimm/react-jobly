import { useNavigate } from "react-router-dom";
import "./CompanyCard.css";
import { Link } from "react-router-dom";

/** Presentational component for displaying company
 *
 * State: None
 * Props: company like {handle, name, description, jobs, logo}
 *
 * CompanyList -> CompanyCard
*/
function CompanyCard({ company }) {

    return (<div>
        <Link to={`/companies/${company.handle}`}>
            <div className="CompanyCard">
                <h3>{company.name}</h3>
                <h4>{company.description}</h4>
                <h5>{company.numEmployees}</h5>
                {company.logoUrl && <img src={company.logoUrl} alt={`Logo for ${company.name}`} />}
            </div>
        </Link >
    </div>);
}

export default CompanyCard;