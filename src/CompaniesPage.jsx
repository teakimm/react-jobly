import { useContext } from "react";
import { Navigate } from "react-router-dom";
import CompaniesList from "./CompaniesList";
import SearchForm from "./SearchForm";
import UserContext from "./UserContext";
import { useFetchCompanies } from "./apiCustomHooks";
import usePagination from "./usePagination";

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
    const [companies, isLoading, searchFilter, setSearchFilter] = useFetchCompanies();
    const [currPage, setCurrPage] = usePagination();

    function handlePageChange(newPageNum) {
        setCurrPage(newPageNum);
    }

    const { currUser } = useContext(UserContext);
    if (!currUser) {
        return <Navigate to="/" />;
    }

    function search(userInput) {
        setCurrPage(1);
        setSearchFilter(userInput);
    }

    function renderCompanies() {
        return (companies && companies.length > 0)
            ? <CompaniesList
                companies={companies}
                currPage={currPage}
                handlePageChange={handlePageChange} />
            : <p className="mt-4 text-light">Sorry, no results were found!</p>;
    }

    return (
        <div className="my-5 col-12 col-md-10 offset-md-1" style={{ overflow: "clip" }}>
            <SearchForm initialInput={searchFilter} search={search} />
            <div className="mt-5" style={{ color: "white" }}>
                {searchFilter
                    ? <h1>Search Results for: {searchFilter}</h1>
                    : <h1>All Companies</h1>}
            </div>
            {isLoading
                ? <h1 className="text-light">Loading...</h1>
                : <div> {renderCompanies()} </div>}
        </div>
    );
}

export default CompaniesPage;