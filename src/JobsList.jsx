import JobCard from "./JobCard";
import { useState } from "react";
import Pagination from "./Pagination";

/** Presentational component for displaying jobs list
 *
 * State: None
 * Props: jobs like [{id, salary, title, equity, companyName, companyHandle}, ...]
 *
 * JobsPage, CompanyDetails -> JobsList -> JobCard
*/
function JobsList({ jobs }) {
    const [currPage, setCurrPage] = useState(1);

    console.log(currPage);

    function renderJobs() {
        const startIndex = (currPage-1)*20
        const jobsToDisplay = jobs.slice(startIndex,startIndex + 20);
        return (jobsToDisplay.map(job =>
            <JobCard
                key={job.id}
                job={job} />
        ));
    }

    function handlePageChange(newPageNum) {
        setCurrPage(newPageNum);
    }

    return (
        <div>
            {renderJobs()}
            <Pagination currPage={currPage} numItems={jobs.length} handlePageChange={handlePageChange}/>
        </div>
    );
}

export default JobsList;