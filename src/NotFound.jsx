
/** Component for 404 page
 *
 * State: None
 * Props: None
 *
 * RoutesList -> NotFound
 */
function NotFound({ message = "Page not found" }) {
    return (
        <div className="card p-3">
            <h1>404</h1>
            <h4>{message}</h4>
        </div>
    );
}

export default NotFound;