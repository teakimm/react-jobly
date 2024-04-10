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
        const companiesResponse = await JoblyApi.getCompanies();
        setCompanies(companiesResponse);
        setIsLoading(false);
    }

    useEffect(function fetchCompaniesWhenMounted() {
        fetchCompanies();
    }, []);

    function search(userInput) {
        userInput = userInput.trim();
        // setIsLoading(true);
        if (!userInput) {
            setSearchFilter("");
            fetchCompanies();
            // setIsLoading(false);
        } else {
            console.log(userInput);
            setSearchFilter(userInput);
            async function filterCompanies() {
                const companiesResponse = await JoblyApi.filterCompanies(userInput);
                setCompanies(companiesResponse);
                // setIsLoading(false);
            }
            filterCompanies();
        }
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