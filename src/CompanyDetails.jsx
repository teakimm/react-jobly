import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobsList from "./JobsList";
import NotFound from "./NotFound";

/** Component for displaying company details
 *
 * Props: none
 * State: company like: {handle, name, description, numEmployees, logoUrl}
 *
 * RoutesList -> CompanyDetails -> JobList
*/
function CompanyDetails() {
    const { handle } = useParams();;

    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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