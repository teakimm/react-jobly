import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import JoblyApi from "../api";
import JobsList from "./JobsList";
import NotFound from "./NotFound";
import userContext from "./UserContext";

/** Component for displaying company details
 *
 * Props: none
 * State: company like: {handle, name, description, numEmployees, logoUrl}
 *
 * RoutesList -> CompanyDetails -> JobList
*/
function CompanyDetails() {
    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { handle } = useParams();

    const { currUser } = useContext(userContext);
    if (!currUser) {
        return <Navigate to="/" />;
    }

    useEffect(function fetchCompanyWhenMounted() {
        async function fetchCompany() {
            try {
                const companyResponse = await JoblyApi.getCompany(handle);
                setCompany(companyResponse);
            } catch (err) {
                console.error(err);
            }
            setIsLoading(false);
        }
        fetchCompany();
    }, []);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            {company
                ? <div>
                    <h4>{company.name}</h4>
                    <p>{company.description}</p>
                    <JobsList jobs={company.jobs} />
                </div>
                : <NotFound message={`No company with handle: ${handle}`} />}

        </div>
    );
}

export default CompanyDetails;