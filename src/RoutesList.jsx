
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CompaniesPage from "./CompaniesPage";
import CompanyDetails from "./CompanyDetails";
import JobsPage from "./JobsPage";
import NotFound from "./NotFound";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import RegisterPage from "./RegisterPage";


/** Component for defining routes
 *
 * State: None
 * Props: None
 *
 * App -> RoutesList -> HomePage, CompaniesPage, CompanyDetails, JobsPage, NotFound
 */
function RoutesList({ login, register }) {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/login" element={<LoginPage login={login} />} />
            <Route path="/register" element={<RegisterPage register={register} />} />
            <Route path="/companies/:handle" element={<CompanyDetails />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;