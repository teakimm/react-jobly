import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import JoblyApi from "../api";
import CompaniesList from "./CompaniesList";
import SearchForm from "./SearchForm";
import userContext from "./userContext";

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

    const { currUser} = useContext(userContext);
    if (!currUser) {
        return <Navigate to="/"/>
    }

    async function fetchCompanies(searchParam = "") {
        const companiesResponse = await JoblyApi.getCompanies(searchParam);
        setCompanies(companiesResponse);
        setIsLoading(false);
    }

    useEffect(function fetchCompaniesWhenMounted() {
        fetchCompanies();
    }, []);

    /** Make api request with user input and updates state on api response. */
    function search(userInput) {
        setIsLoading(true);
        setSearchFilter(userInput);
        fetchCompanies(userInput);
        setIsLoading(false);
    }

    function renderCompanies() {
        return (companies && companies.length > 0)
            ? <CompaniesList companies={companies} />
            : "Sorry, no results were found!";
    }

    return (
        <div>
            <SearchForm initialInput={searchFilter} search={search} />
            {searchFilter
                ? <h1>Search Results for: {searchFilter}</h1>
                : <h1>All Companies</h1>}
            {isLoading
                ? <h1>Loading...</h1>
                : <div> {renderCompanies()} </div>}
        </div>
    );
}

export default CompaniesPage;