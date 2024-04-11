/** Presentational component for displaying job
 *
 * State: None
 * Props: job like {id, salary, title, equity, companyName, companyHandle}
 *
 * JobsList -> JobCard
*/
function JobCard({ job }) {
    return (
        <div className="JobCard card mt-4 p-2">
            <h3>{job.title}</h3>
            <h6>{job.companyName}</h6>
            <p  className="m-0">Salary: {job.salary ? `$${job.salary.toLocaleString()}` : "unknown"}</p>
            <p className="m-0">Equity: {job.equity || "unknown"}</p>
        </div>
    );
}

export default JobCard;