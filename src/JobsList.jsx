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
    const [numItemsPerPage, setNumItemsPerPage] = useState(8);


    function renderJobs() {
        const startIndex = (currPage - 1) * numItemsPerPage;
        const jobsToDisplay = jobs.slice(startIndex, startIndex + numItemsPerPage);
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
        <div className="d-flex flex-column align-items-center">
            {renderJobs()}
            <Pagination
                currPage={currPage}
                numItems={jobs.length}
                handlePageChange={handlePageChange}
                numItemsPerPage={numItemsPerPage} />
        </div>
    );
}

export default JobsList;