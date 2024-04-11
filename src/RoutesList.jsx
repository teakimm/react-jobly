
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import userContext from "./userContext";
import { useContext } from "react";
import HomePage from "./HomePage";
import CompaniesPage from "./CompaniesPage";
import CompanyDetails from "./CompanyDetails";
import JobsPage from "./JobsPage";
import NotFound from "./NotFound";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

/** Component for defining routes
 *
 * State: None
 * Props: None
 *
 * App -> RoutesList -> HomePage, CompaniesPage, CompanyDetails, JobsPage, NotFound
 */
function RoutesList({ login, register }) {
    const { currUser } = useContext(userContext);

    function renderRoutesAuthenticated() {
        return (

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginForm login={login} />} />
                <Route path="/register" element={<RegisterForm register={register} />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/companies/:handle" element={<CompanyDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        );
    }

    function renderRoutesUnauthenticated() {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginForm login={login} />} />
                <Route path="/register" element={<RegisterForm register={register} />} />
                <Route path="/jobs" element={<Navigate to="/" />} />
                <Route path="/companies" element={<Navigate to="/" />} />
                <Route path="/companies/:handle" element={<Navigate to="/" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        );
    }

    return (<div>
        {currUser
            ? renderRoutesAuthenticated()
            : renderRoutesUnauthenticated()}
    </div>);
}

export default RoutesList;