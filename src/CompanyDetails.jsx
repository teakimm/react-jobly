import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobsList from "./JobsList";

/** Component for displaying company details
 *
 * Prop: none
 * State: company
 *
 * RoutesList -> CompanyDetails -> JobList
*/
function CompanyDetails() {
    const { handle } = useParams();

    const [company, setCompany] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function fetchCompanyWhenMounted() {
        async function fetchCompany() {
            const companyResponse = await JoblyApi.getCompany(handle);
            setCompany(companyResponse);
            setIsLoading(false);
        }
        fetchCompany();
    }, []);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <JobsList jobs={company.jobs} />
        </div>
    );
}

export default CompanyDetails;