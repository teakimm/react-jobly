import { useContext, useState } from "react";
import userContext from "./userContext";

const initialFormData = {
    username: "",
    password: ""
};


function LoginPage({ login }) {
    const [formData, setFormData] = useState(initialFormData);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        login(formData);
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
        </div>
    );
}

export default LoginPage;