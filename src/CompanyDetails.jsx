import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import JoblyApi from "../api";
import JobsList from "./JobsList";
import NotFound from "./NotFound";
import UserContext from "./UserContext";

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

    const { currUser } = useContext(UserContext);
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

    if (isLoading) return <h1 className="text-light">Loading...</h1>;

    return (
        <div className="mt-5 col-12 col-md-10 offset-md-1">
            {company
                ? <div style={{ color: "white" }}>
                    <h2>{company.name}</h2>
                    <p>{company.description}</p>
                    <JobsList jobs={company.jobs} />
                </div>
                : <NotFound message={`No company with handle: ${handle}`} />}

        </div>
    );
}

export default CompanyDetails;