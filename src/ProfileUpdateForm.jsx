import { Route, Routes, Navigate } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext, useState } from "react";
import Alert from "./Alert";


/** Component for rendering profile update form
 *
 * State:
 * - formData (object of user inputs)
 * - alertMessages like: ["invalid username/password", ...]
 * Props:
 *  updateProfile -> function to call when user submits form
 *
 *  RoutesList -> ProfileUpdateForm
*/
function ProfileUpdateForm({ updateProfile }) {
    const { currUser } = useContext(UserContext);

    if (!currUser) {
        return <Navigate to="/" />;
    }

    const [formData, setFormData] = useState({
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email
    });


    const [alertMessages, setAlertMessages] = useState(null);


    /** Updates formData state based on user inputs in form */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** calls parent function with formData, sets state with correct messages */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await updateProfile(formData);
            setAlertMessages({
                type: "alert-success",
                messages: ["Profile Updated Successfully"]
            });
        } catch (err) {
            setAlertMessages({
                type: "alert-danger",
                messages: err
            });
        }
    }

    return (
        <div className="col-6 offset-3">
            <h1 className="mt-5" style={{ color: "white" }}>Edit Profile</h1>
            <div className="card p-4 mt-3">
                <form className="mb-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="username">Username:</label>
                        <input className="form-control" name="username" id="username" value={currUser.username} type="text" disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="firstName">First Name:</label>
                        <input className="form-control" name="firstName" id="firstName" onChange={handleChange} value={formData.firstName} type="text" />
                    </div>
                    <div className="mb-3" >
                        <label className="form-label" htmlFor="lastName">Last Name:</label>
                        <input className="form-control" name="lastName" id="lastName" onChange={handleChange} value={formData.lastName} type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input className="form-control" name="email" id="email" onChange={handleChange} value={formData.email} type="email" />
                    </div>

                    <button className="btn btn-secondary">Update</button>

                </form>
                {alertMessages && <Alert messages={alertMessages.messages} type={alertMessages.type} />}
            </div>
        </div>
    );
}

export default ProfileUpdateForm;