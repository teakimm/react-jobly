import { useNavigate } from "react-router-dom";
import "./CompanyCard.css"

/** Presentational component for displaying company
 *
 * State: None
 * Props: company like {handle, name, description, jobs, logo}
 *
 * CompanyList -> CompanyCard
*/
function CompanyCard({ company }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/companies/${company.handle}`);
    }

    return (
        <div className="CompanyCard" onClick={handleClick}>
            <h3>{company.name}</h3>
            <h4>{company.description}</h4>
            <h5>{company.numEmployees}</h5>
            {company.logoUrl && <img src={company.logoUrl} alt={`Logo for ${company.name}`} />}
        </div>
    );
}

export default CompanyCard;