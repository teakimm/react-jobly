
/** Presentational component for displaying company
 *
 * State: None
 * Props: company like {code, name, description, jobs, logo}
 *
 * CompanyList -> CompanyCard
*/
function CompanyCard({ company }) {
    return (
        <div>
            <h3>{company.name}</h3>
            <h4>{company.description}</h4>
            <h5>{company.numEmployees}</h5>
            {company.logoUrl && <img src={company.logoUrl} alt={`Logo for ${company.name}`} />}
        </div>
    );
}

export default CompanyCard;