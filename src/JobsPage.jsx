import { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobsList from "./JobsList";

/** smart component to render jobs
 *
 * state:
 * jobs - list of jobs like: [{{id, salary, title, equity, ...}, ...]
 * isLoading - boolean representing status of api call
 * isSearch - boolean representing to filter jobs or not based on user input
 *
 * props: none
 *
 * RouteList -> JobsPage -> JobList, SearchForm -> JobCard
 */
function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchFilter, setSearchFilter] = useState("");

    useEffect(function fetchJobsWhenMounted() {
        async function fetchJobs() {
            const jobResponse = await JoblyApi.getJobs();
            setJobs(jobResponse);
            setIsLoading(false);
        }
        fetchJobs();

    }, []);


    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <JobsList jobs={jobs} />
        </div>
    );
}

export default JobsPage;