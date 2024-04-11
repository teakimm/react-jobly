
import { Route, Routes } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";
import HomePage from "./HomePage";
import CompaniesPage from "./CompaniesPage";
import CompanyDetails from "./CompanyDetails";
import JobsPage from "./JobsPage";
import NotFound from "./NotFound";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProfileUpdateForm from "./ProfileUpdateForm";

/** Component for defining routes
 *
 * State: None
 * Props: None
 *
 * App -> RoutesList -> HomePage, CompaniesPage, CompanyDetails, JobsPage, NotFound
 */
function RoutesList({ login, register, updateProfile }) {
    const { currUser } = useContext(UserContext);

    const message = currUser ? "Page not found" : "You shouldn't be here";

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/register" element={<RegisterForm register={register} />} />
            {currUser
                && <>
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/companies" element={<CompaniesPage />} />
                    <Route path="/companies/:handle" element={<CompanyDetails />} />
                    <Route path="/profile" element={<ProfileUpdateForm updateProfile={updateProfile} />} />
                </>
            }
            <Route path="*" element={<NotFound message={message} />} />
        </Routes>
    );
}

export default RoutesList;