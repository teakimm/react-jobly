import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import JoblyApi from "../api";
import JobsList from "./JobsList";
import SearchForm from "./SearchForm";
import userContext from "./userContext";

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

    const { currUser} = useContext(userContext);
    if (!currUser) {
        return <Navigate to="/"/>
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
            ? <JobsList jobs={jobs} />
            : "Sorry, no results were found!";
    }

    return (
        <div>
            <SearchForm initialInput={searchFilter} search={search} />
            {searchFilter
                ? <h1>Search Results for: {searchFilter}</h1>
                : <h1>All Jobs</h1>}
            {isLoading
                ? <h1>Loading...</h1>
                : <div> {renderJobs()} </div>}
        </div>
    );
}

export default JobsPage;