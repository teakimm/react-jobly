/** Component for rendering alert messages
 *
 * state: none
 * props
 * - errors like: ["invalid username/password", ...]
 *
 * RegisterForm, LoginForm -> Alert
 *
 */
function Alert({ errors }) {
    return (
        <div className="alert alert-danger">
            {errors.map((error, idx) =>
                <div key={idx}>{error}</div>
            )}
        </div>

    );
}

export default Alert;