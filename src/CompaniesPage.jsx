import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import CompaniesList from "./CompaniesList";
import SearchForm from "./SearchForm";
import UserContext from "./UserContext";
import { useFetchCompanies } from "./apiCustomHooks";

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

    const [queryParams, setQueryParams] = useSearchParams();
    const [currPage, setCurrPage] = useState(queryParams.get("page") ? Number(queryParams.get("page")) : 1);

    const navigate = useNavigate();

    function handlePageChange(newPageNum) {
        setCurrPage(newPageNum);
    }

    useEffect(function updateQueryStringOnCurrPageChange() {
        if (!Number.isInteger(currPage)) {
            navigate("/404");
            return;
        }
        setQueryParams(new URLSearchParams({ page: currPage }));
    }, [currPage]);

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