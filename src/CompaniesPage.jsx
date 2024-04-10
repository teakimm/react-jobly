import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompaniesList from "./CompaniesList";
import SearchForm from "./SearchForm";
/** Smart component to render companies
 *
 * state:
 * companies - list of companies like: [{handle, name, desc., numEmployees, logUrl  }, ...]
 * isLoading - boolean representing status of api call
 * searchFilter - string representing users input to search bar
 *
 * props: none
 *
 * RouteList -> CompaniesPage -> CompaniesList , SearchForm -> CompanyCard
 */
function CompaniesPage() {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchFilter, setSearchFilter] = useState("");

    async function fetchCompanies() {
        const companyResponse = await JoblyApi.getCompanies();
        setCompanies(companyResponse);
        setIsLoading(false);
    }

    useEffect(function fetchCompaniesWhenMounted() {
        fetchCompanies();
    }, []);







    return (
        <div>
            <CompaniesList companies={companies} />
        </div>
    );
}

export default CompaniesPage;