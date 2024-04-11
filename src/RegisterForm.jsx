import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";


const INITIAL_FORM_DATA = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
};

/** Component for rendering register form
 *
 * State:
 * - formData (object of user inputs)
 * - errors like: ["invalid username/password", ...]
 * Props:
 *  handleSubmit -> function to call when user submits form
 *
 *  RoutesList -> RegisterForm
*/
function RegisterForm({ register }) {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    // TODO: try catch register here instead of in app
    async function handleSubmit(evt) {
        evt.preventDefault();
        const status = await register(formData);
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

                <label htmlFor="firstName">First Name:</label>
                <input name="firstName" id="firstName" onChange={handleChange} value={formData.firstName} type="text" />

                <label htmlFor="lastName">Last Name:</label>
                <input name="lastName" id="lastName" onChange={handleChange} value={formData.lastName} type="text" />

                <label htmlFor="email">Email:</label>
                <input name="email" id="email" onChange={handleChange} value={formData.email} type="email" />

                <button>Register</button>
            </form>
            {errors.length > 0 && <Alert errors={errors} />}
        </div>
    );
}

export default RegisterForm;