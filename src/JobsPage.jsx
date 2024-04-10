import { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobsList from "./JobsList";
import SearchForm from "./SearchForm";

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

    async function fetchJobs() {
        const jobResponse = await JoblyApi.getJobs();
        setJobs(jobResponse);
        setIsLoading(false);
    }

    useEffect(function fetchJobsWhenMounted() {
        fetchJobs();
    }, []);

    function search(userInput) {
        userInput = userInput.trim();
        setIsLoading(true);
        if (!userInput) {
            setSearchFilter("");
            fetchJobs();
            setIsLoading(false);
        } else {
            setSearchFilter(userInput);
            async function filterJobs() {
                const jobResponse = await JoblyApi.filterJobs(userInput);
                setJobs(jobResponse);
                setIsLoading(false);
            }
            filterJobs();
        }
    }

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <SearchForm initialInput={searchFilter} search={search} />
            {searchFilter
                ? <h1>Search Results for: {searchFilter}</h1>
                : <h1>All Jobs</h1>}
            {jobs.length > 0
                ? <JobsList jobs={jobs} />
                : "Sorry, no results were found!"}

        </div>
    );
}

export default JobsPage;