import "./JobCard.css";

/** Presentational component for displaying job
 *
 * State: None
 * Props: job like {id, salary, title, equity, companyName, companyHandle}
 *
 * JobsList -> JobCard
*/
function JobCard({ job }) {
    return (
        <div className="JobCard">
            <h3>{job.title}</h3>
            <h4>{job.companyName}</h4>
            <h5>Salary: {job.salary ? `$${job.salary.toLocaleString()}` : "unknown"}</h5>
            <h5>Equity: {job.equity || "unknown"}</h5>
        </div>
    );
}

export default JobCard;