import { useState } from "react";

const INITIAL_FORM_DATA = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
};

/** TODO: */
function RegisterPage({ register }) {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        register(formData);
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
        </div>
    );
}

export default RegisterPage;