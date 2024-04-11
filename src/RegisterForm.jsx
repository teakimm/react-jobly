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
            await register(formData);
            navigate("/");
        } catch (err) {
            setErrors(err);
        }
    }

    return (
        <div>

            <h1 className="mt-5" style={{ color: "white" }}>Register</h1>
            <div className="card p-4 mt-3" style={{ width: "28rem" }}>

                <form className="mb-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="username">Username:</label>
                        <input className="form-control" name="username" id="username" onChange={handleChange} value={formData.username} type="text" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input className="form-control" name="password" id="password" onChange={handleChange} value={formData.password} type="password" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="firstName">First Name:</label>
                        <input className="form-control" name="firstName" id="firstName" onChange={handleChange} value={formData.firstName} type="text" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="lastName">Last Name:</label>
                        <input className="form-control" name="lastName" id="lastName" onChange={handleChange} value={formData.lastName} type="text" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input className="form-control" name="email" id="email" onChange={handleChange} value={formData.email} type="email" />
                    </div>



                    <button className="btn btn-primary">Register</button>
                </form>
                {errors.length > 0 && <Alert messages={errors} />}
            </div>
        </div>
    );
}

export default RegisterForm;