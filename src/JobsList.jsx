import JobCard from "./JobCard";
import Pagination from "./Pagination";

const NUM_ITEMS_PER_PAGE = 8;

/** Presentational component for displaying jobs list
 *
 * State: curPage
 * Props: jobs like [{id, salary, title, equity, companyName, companyHandle}, ...]
 *
 * JobsPage, CompanyDetails -> JobsList -> JobCard, Pagination
*/
function JobsList({ jobs, currPage, handlePageChange }) {

    function renderJobs() {
        const startIndex = (currPage - 1) * NUM_ITEMS_PER_PAGE;
        const jobsToDisplay = jobs.slice(startIndex, startIndex + NUM_ITEMS_PER_PAGE);
        return (jobsToDisplay.map(job =>
            <JobCard
                key={job.id}
                job={job} />
        ));
    }

    return (
        <div className="d-flex flex-column align-items-center">
            {renderJobs()}
            <Pagination
                currPage={currPage}
                numItems={jobs.length}
                handlePageChange={handlePageChange}
                numItemsPerPage={NUM_ITEMS_PER_PAGE} />
        </div>
    );
}

export default JobsList;