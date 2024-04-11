import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const INITIAL_FORM_DATA = {
    username: "",
    password: ""
};

/** Component for rendering login form
 *
 * State:
 * - formData (object of user inputs)
 * - errors like: ["invalid username/password", ...]
 * Props:
 *  handleSubmit -> function to call when user submits form
 *
 *  RoutesList -> LoginForm
*/
function LoginForm({ login }) {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    /** Updates formData state based on user inputs in form */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** calls parent function with formData */
    async function handleSubmit(evt) {

        evt.preventDefault();
        try {
            await login(formData);
            navigate("/");
        } catch (err) {
            setErrors(err);
        }
    }

    return (
        <div>
            <h1 className="mt-5" style={{ color: "white" }}>Login</h1>
            <div className="card p-4 mt-3" style={{ width: "20rem" }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="username">Username:</label>
                        <input className="form-control" name="username" id="username" onChange={handleChange} value={formData.username} type="text" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input className="form-control" name="password" id="password" onChange={handleChange} value={formData.password} type="password" />
                    </div>


                    <button className="btn btn-primary">Login</button>
                </form>
                {errors.length > 0 && <Alert messages={errors} />}
            </div>
        </div>

    );
}

export default LoginForm;