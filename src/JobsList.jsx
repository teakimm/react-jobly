import JobCard from "./JobCard";

/** Presentational component for displaying jobs list
 *
 * State: None
 * Props: jobs like [{id, salary, title, equity, companyName, companyHandle}, ...]
 *
 * JobsPage, CompanyDetails -> JobsList -> JobCard
*/
function JobsList({ jobs }) {

    function renderJobs() {
        return (jobs.map(job =>
            <JobCard
                key={job.id}
                job={job} />
        ));
    }

    return (
        <div>
            {renderJobs()}
        </div>
    );
}

export default JobsList;