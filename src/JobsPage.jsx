import { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobsList from "./JobsList";


function JobsPage() {
    const [jobs, setJobs] = useState([]);

    useEffect(function fetchJobsWhenMounted() {
        async function fetchJobs() {
            const jobResponse = await JoblyApi.getJobs();
            setJobs(jobResponse);
        }
        fetchJobs();
    }, []);


    return (
        <div>
            <JobsList jobs={jobs} />
        </div>
    );
}

export default JobsPage;