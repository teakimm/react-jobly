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

    //TODO: missing docstrings for both inner functions
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    // TODO: try catch login here instead of in app
    async function handleSubmit(evt) {
        evt.preventDefault();
        const status = await login(formData);
        if (!status.valid) {
            setErrors(status.errors);
        } else {
            navigate("/");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input name="username" id="username" onChange={handleChange} value={formData.username} type="text" />

                <label htmlFor="password">Password:</label>
                <input name="password" id="password" onChange={handleChange} value={formData.password} type="password" />

                <button>Login</button>
            </form>
            {errors.length > 0 && <Alert errors={errors} />}

        </div>
    );
}

export default LoginForm;