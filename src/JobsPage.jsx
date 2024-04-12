import { useState, useEffect, useContext } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import JoblyApi from "../api";
import JobsList from "./JobsList";
import SearchForm from "./SearchForm";
import UserContext from "./UserContext";

/** smart component to render jobs
 *
 * state:
 * jobs - list of jobs like: [{id, salary, title, equity, ...}, ...]
 * isLoading - boolean representing status of api call
 * searchFilter - string representing users input to search bar
 *
 * props: none
 *
 * RouteList -> JobsPage -> JobsList, SearchForm -> JobCard
 */
function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchFilter, setSearchFilter] = useState("");

    const [queryParams, setQueryParams] = useSearchParams();
    const [currPage, setCurrPage] = useState(queryParams.get("page") || 1);

    function handlePageChange(newPageNum) {
        setCurrPage(newPageNum);
    }

    useEffect(function something() {
        setQueryParams(new URLSearchParams({ page: currPage }));
    }, [currPage]);

    const { currUser } = useContext(UserContext);
    if (!currUser) {
        return <Navigate to="/" />;
    }

    async function fetchJobs(searchParam = "") {
        const jobResponse = await JoblyApi.getJobs(searchParam);
        setJobs(jobResponse);
        setIsLoading(false);
    }

    useEffect(function fetchJobsWhenMounted() {
        fetchJobs();
    }, []);

    /** Make api request with user input and updates state on api response. */
    function search(userInput) {
        setIsLoading(true);
        setSearchFilter(userInput);
        fetchJobs(userInput);
        setIsLoading(false);
    }

    function renderJobs() {
        return (jobs && jobs.length > 0)
            ? <JobsList
                jobs={jobs}
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
                    : <h1>All Jobs</h1>}
            </div>
            {isLoading
                ? <h1 className="text-light">Loading...</h1>
                : <div> {renderJobs()} </div>}
        </ div>
    );
}

export default JobsPage;;