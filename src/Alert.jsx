/** Component for rendering alert messages
 *
 * state: none
 * props
 * - errors like: ["invalid username/password", ...]
 *
 * RegisterForm, LoginForm -> Alert
 *
 */
function Alert({ messages, type = "alert-danger" }) {
    return (
        <div className={`alert ${type}`} >
            {messages.map((message, idx) =>
                <div key={idx}>{message}</div>
            )}
        </div>

    );
}

export default Alert;